import { createContext, useEffect, useState, useContext } from "react";
import api from './../../services/api';
import {AuthContext} from './../Auth/index';
import {toast} from 'react-toastify';
export const GoalsContext = createContext();
export const GoalsProvider = ({ children }) => {

  const {token} = useContext(AuthContext);
  const createGoals = (data)=>{
    const newData = {...data,achieved:false,how_much_achieved:100,group:970}
    api.post('goals/',newData,{
      headers:
      {Authorization:`Bearer ${token}`}
    }).then(response=>{
      toast.success('Objetivo criado!')
    }).catch(err=>{
      console.log(newData)
      console.log(err);
      toast.error('erro')
    });
  };

  const updateGoal = ()=>{
    api.patch(`/goals/goal_id/`,{achieved:true},{headers:{Authorization: `Bearer ${token}`}}).then(res=>toast.success('Objetivo atualizado!')).catch(err=>toast.error('Objetivo não encontrado'));
  };
  const deleteGoal = ()=>{
    api.delete(`/goals/goal_id/`,{headers:{Authorization: `Bearer ${token}`}}).then(res=>toast.success('Objetivo deletado')).catch(err=>console.log(err))
  };
  return (
  <GoalsContext.Provider value={{createGoals,updateGoal,deleteGoal}}>
    {children}
  </GoalsContext.Provider>);
};
export const useGoals = () =>  useContext(GoalsContext);

