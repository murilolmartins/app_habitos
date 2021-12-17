import { createContext, useContext, useState } from "react";
import { AuthContext } from "../Auth";
import api from "./../../services/api";
import { toast } from "react-toastify";
export const GroupsContext = createContext();

const GroupsProvider = ({ children }) => {
  const [isNotCreatedGroup, setIsNotCreatedGroup] = useState(true);
  const [groupId, setGroupId] = useState(0);
  const [actId, setActId] = useState(0);
  const { token } = useContext(AuthContext);
  const [userGroupsList, setUserGroupsList] = useState([]);
  const [isNotCreatedActivitie, setIsNotCreatedActivitie] = useState(false);
  const [createActivitiesOpen, setCreateActivitiesOpen] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [list, setList] = useState([]);

  const myGroups = () => {
    api
      .get(`/groups/subscriptions/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // setUserGroupsList(res.data);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Grupo criado!");
        myGroups();
      })
      .catch((err) => console.log(err));
  };
  const updateGroup = (data) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Atualizado com sucesso!");
        myGroups();
      })
      .catch((err) => {
        toast.error("Necessário ser criador do grupo!");
        console.log(err);
      });
  };
  const subscribeOnGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Você foi inscrito!");
        myGroups();
      })
      .catch((err) => toast.error("Você já está nesse grupo!"));
  };
  const unsubscribe = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Você saiu do grupo!");
        myGroups();
      })
      .catch((err) => toast.error("Você não está nesse grupo!"));
  };
  return (
    <GroupsContext.Provider
      value={{
        createGroup,
        updateGroup,
        subscribeOnGroup,
        isNotCreatedGroup,
        setIsNotCreatedGroup,
        unsubscribe,
        myGroups,
        userGroupsList,
        setGroupId,
        groupId,
        actId,
        setActId,
        createActivitiesOpen,
        setCreateActivitiesOpen,
        setIsNotCreatedActivitie,
        isNotCreatedActivitie,
        isCreated,
        setIsCreated,
        setUserGroupsList,
        list,
        setList,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
export const useGroups = () => useContext(GroupsContext);
export default GroupsProvider;
