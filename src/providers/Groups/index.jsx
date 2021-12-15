import {createContext,useContext,useState} from 'react';
import { AuthContext } from '../Auth';
import api from './../../services/api';
import {toast} from 'react-toastify';
export const GroupsContext = createContext();

const GroupsProvider = ({children})=>{
  const [isNotCreatedGroup,setIsNotCreatedGroup] = useState(false);
  const [groupId,setGroupId] = useState(991)
  const {token} = useContext(AuthContext);

  const createGroup = (data)=>{
    api.post('/groups/',data,{
      headers:
      {Authorization:`Bearer ${token}`}
    }).then(response=>toast.success('Grupo criado!')).catch(err=>console.log(err));
  };
  const updateGroup = (data)=>{
    api.patch(`/groups/${groupId}/`,data,{
      headers:
      {Authorization:`Bearer ${token}`}
    }).then(response=>toast.success('Atualizado com sucesso!')).catch(err=>{toast.error('Necessário ser criador do grupo!');
    console.log(err)}
    );
  };
  const subscribeOnGroup = ()=>{
    api.post(`/groups/${groupId}/subscribe/`, groupId, {  
      headers: { Authorization: `Bearer ${token}` },
    }).then(response=>toast.success('Você foi inscrito!')).catch(err=>toast.error('Você já está nesse grupo!'));
  };
  const unsubscribe = ()=>{
    api.delete(`/groups/${groupId}/unsubscribe/`,{  
      headers: { Authorization: `Bearer ${token}` },
    }).then(response=>toast.success('Você saiu do grupo!')).catch(err=>toast.error('Você não está nesse grupo!'));
  }
  return (
    <GroupsContext.Provider value={{createGroup,updateGroup,subscribeOnGroup,isNotCreatedGroup,setIsNotCreatedGroup,unsubscribe}}>
      {children}
    </GroupsContext.Provider>
  );
};
export const useGroups = ()=>useContext(GroupsContext);
export default GroupsProvider;
