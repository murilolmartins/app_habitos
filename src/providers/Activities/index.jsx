import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
export const ActivitiesContext = createContext();
export const ActivitiesProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  //   const [activities, setActivities] = useState({
  //     title: "",
  //     realization_time: "",
  //     group: "",
  //   });

  const createActivity = (data) => {
    console.log(data);
    const newData = { ...data, group: 1030 };
    api
      .post("/activities/", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("alow");
        toast.success("Atividade Adicionada !");
      })
      .catch((err) => {
        toast.error("Algo errado aconteceu !");
        console.log(err);
      });
  };

  const updateActivity = ({ id, ...res }) => {
    api
      .patch(
        `/activities/${id}`,
        { ...res },
        { headers: { Autorization: `Bearer ${token}` } }
      )
      .then((res) => {
        toast.success("Atividade atualizada!");
      })
      .catch((err) => toast.error("Atividade nao listada"));
  };
  const deleteActivity = ({ id }) => {
    api
      .delete(`/activities/${id}`, {
        headers: { Autorization: `Bearer${token}` },
      })
      .then((res) => toast.success("Atividade deletada com sucesso"))
      .catch((err) => {
        toast.error("Erro ao deletar");
        console.log(err);
      });
  };
  return (
    <ActivitiesContext.Provider
      value={{ createActivity, updateActivity, deleteActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
export const useActivities = () => useContext(ActivitiesContext);
