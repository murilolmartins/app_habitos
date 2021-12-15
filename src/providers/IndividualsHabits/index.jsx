import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);

  const [habits, setHabits] = useState({
    title: "Comer",
    category: "Saude",
    difficulty: "Facil",
    frequency: "Todo Dia",
    achieved: "",
    how_much_achieved: "",
    user: "",
  });


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
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar esse hábito");
        console.log(data);
      });
  };

  return (

    <HabitsContext.Provider value={{ createHabits, habits }}>

      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
