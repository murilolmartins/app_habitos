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
  return (
  <GoalsContext.Provider value={{createGoals}}>
    {children}
  </GoalsContext.Provider>);
};
export const useGoals = () =>  useContext(GoalsContext);

