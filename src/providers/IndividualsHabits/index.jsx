import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);
  
  const createHabits = (data) => {
    api
      .post(
        "habits/",
        { ...data, user:id },
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
    <HabitsContext.Provider value={{createHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
