import { createContext, useEffect, useState, useContext } from "react";
import api from "./../../services/api";
import { AuthContext } from "./../Auth/index";
import { toast } from "react-toastify";
import { useGroups } from "./../Groups/index";
export const GoalsContext = createContext();
export const GoalsProvider = ({ children }) => {
  const [isNotCreatedGoal, setIsNotCreatedGoal] = useState(true);
  const { token } = useContext(AuthContext);
  const [goalId, setGoalId] = useState(0);
  const { groupId } = useGroups();
  const [isModalGroupOpen, setIsModalGroupOpen] = useState(false);
  const [isModalGoalOpen, setIsModalGoalOpen] = useState(false);
  const [goalsOnGroup, setGoalsOnGroup] = useState([]);
  const createGoals = (data) => {
    const newData = {
      ...data,
      achieved: false,
      how_much_achieved: 100,
      group: groupId,
    };
    api
      .post("goals/", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Objetivo criado!");
      })
      .catch((err) => {
        console.log(newData);
        console.log(err);
        toast.error("erro");
      });
  };

  const updateGoalAchieved = () => {
    api
      .patch(
        `/goals/${goalId}/`,
        { achieved: false },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => toast.success("Objetivo alcançado!"))
      .catch((err) => toast.error("Objetivo não encontrado"));
  };
  const updateGoalData = (data) => {
    api
      .patch(`/goals/${goalId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => toast.success("Objetivo atualizado!"))
      .catch((err) => toast.error("Objetivo não encontrado"));
  };
  const deleteGoal = () => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => toast.success("Objetivo deletado"))
      .catch((err) => toast.error("Objetivo não encontrado"));
  };
  return (
    <GoalsContext.Provider
      value={{
        createGoals,
        updateGoalAchieved,
        updateGoalData,
        deleteGoal,
        isNotCreatedGoal,
        setIsNotCreatedGoal,
        isModalGroupOpen,
        setIsModalGroupOpen,
        goalsOnGroup,
        setGoalsOnGroup,
        isModalGoalOpen,
        setIsModalGoalOpen,
        setGoalId
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
export const useGoals = () => useContext(GoalsContext);
