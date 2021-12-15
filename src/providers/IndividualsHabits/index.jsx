import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);


  const [isNotCreatedHabits, setIsNotCreatedHabits] = useState(false);

  const [habits, setHabits] = useState([]);


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
        setHabits(res.data);
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar esse hábito");
      });
  };

  const editHabits = (data) => {
    api
      .patch(`habits/:${habits.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito editado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível editar esse hábito");
      });
  };

  const deleteHabits = (data) => {
    api
      .delete(`habits/:${habits.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito deletado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível deletar um hábito inexistente");
      });
  };

  return (

    <HabitsContext.Provider
      value={{
        createHabits,
        editHabits,
        deleteHabits,
        isNotCreatedHabits,
        setIsNotCreatedHabits,
        habits,
      }}
    >

      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
