import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import AuthContext from "../Auth";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);


  const [habits, setHabits] = useState({
    title: "",
    category: "",
    difficulty: "",
    frequency: "",
    achieved: "",
    how_much_achieved: "",
    user: "",
  });

  const createHabits = (data) => {
    api
      .post("habits/", data, {
        Authorization: `Bearer ${token}`,
      })
      .then((res) => {
        toast.success("Hábito criado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar esse hábito");
      });
  };

  return (
    <HabitsContext.Provider value={{ habits, createHabits, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
