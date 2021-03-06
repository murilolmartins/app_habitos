import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);

  const [isNotCreatedHabits, setIsNotCreatedHabits] = useState(true);

  const [habitId, setHabitId] = useState(0);
  const [checkedHabit, setCheckedHabit] = useState(true);
  const [inputText, setInputText] = useState("");
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHabits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createHabits = (data) => {
    api
      .post(
        "habits/",

        { ...data, user: id, achieved: false, how_much_achieved: 0 },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Hábito criado com sucesso!");

        getHabits();
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar esse hábito");
      });
  };

  const editHabits = (data) => {
    api

      .patch(
        `habits/${habitId}/`,
        { ...data, how_much_achieved: 0 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((res) => {
        toast.success(
          checkedHabit ? "Hábito concluído!" : "Hábito não concluido"
        );
        getHabits();
      })
      .catch((err) => {
        toast.error("Não foi possível editar esse hábito");
        console.log(err);
      });
  };

  const deleteHabits = (data) => {
    api
      .delete(`habits/${data.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito deletado com sucesso!");
        getHabits();
      })
      .catch((err) => {
        toast.error("Não foi possível deletar um hábito inexistente");
      });
  };

  const habitsSearch = (inputText) => {
    if (inputText === "") {
      getHabits();
    } else {
      const insensitiveCase = new RegExp(inputText, "i");
      const filteredHabits = habits.filter((habit) =>
        insensitiveCase.test(habit.title || habit.category)
      );
      setHabits(filteredHabits);
    }
  };

  return (
    <HabitsContext.Provider
      value={{
        getHabits,
        createHabits,
        editHabits,
        deleteHabits,
        setHabitId,
        isNotCreatedHabits,
        setIsNotCreatedHabits,
        habits,
        inputText,
        setInputText,
        habitsSearch,
        setCheckedHabit,
        checkedHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
