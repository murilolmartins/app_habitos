import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import {useGroups} from './../Groups';
export const ActivitiesContext = createContext();
export const ActivitiesProvider = ({ children }) => {
  const [isNotCreatedActivitie,setIsNotCreatedActivitie] = useState(false);
  const { token } = useContext(AuthContext);
  const {groupId} = useGroups();
  const {actId} = useGroups()
  //   const [activities, setActivities] = useState({
  //     title: "",
  //     realization_time: "",
  //     group: "",
  //   });
  
  const createActivity = (data) => {
    console.log(data);
    const newData = { ...data, group: groupId };
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

  const updateActivity = (data) => {
    api
      .patch(
        `/activities/${actId}/`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        toast.success("Atividade atualizada!");
      })
      .catch((err) => {
        console.log(err)
        toast.error("Atividade nao listada")});
  };
  const deleteActivity = (actId) => {
  
    api
      .delete(`/activities/${actId}/`,{
        headers:{ Authorization: `Bearer ${token}` },
      })
      .then((res) => toast.success("Atividade deletada com sucesso"))
      .catch((err) => {
        toast.error("Erro ao deletar");
        console.log(err);
      });
  };
  return (
    <ActivitiesContext.Provider
      value={{ createActivity, updateActivity, deleteActivity,isNotCreatedActivitie,setIsNotCreatedActivitie}}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
export const useActivities = () => useContext(ActivitiesContext);
