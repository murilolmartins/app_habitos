import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);

  const [isNotCreatedHabits, setIsNotCreatedHabits] = useState(true);

  const [habitsInfo, setHabitsInfo] = useState([]);
  const [habitId, setHabitId] = useState(0);

  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHabits([...res.data]);
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

        setHabitsInfo(res.data);
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
        toast.success("Hábito concluído!");
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

  const [inputText, setInputText] = useState("");

  const habitsSearch = (inputText) => {
    if (inputText === "") {
      getHabits();
    }
    const insensitiveCase = new RegExp(inputText, "i");
    const filteredHabits = habits.filter((habit) =>
      insensitiveCase.test(habit.title || habit.category)
    );
    setHabits(filteredHabits);
  };

  return (
    <HabitsContext.Provider
      value={{
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
        getHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
