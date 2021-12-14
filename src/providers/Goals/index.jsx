import { createContext, useEffect, useState, useContext } from "react";
import api from './../../services/api';
import AuthContext from './../Auth/index';
import {toast} from 'react-toastify';
export const GoalsContext = createContext();
export const GoalsProvider = ({ children }) => {
  
  const {token} = useContext(AuthContext);
  const createGoals = (data)=>{
    api.post('/goals/',data,{
      headers:{Authenticator:`Bearer ${token}`}
    }).then(response=>{
      toast.success('Objetivo criado!')
    }).catch(err=>{
      console.log(err);
      toast.error('erro')
    });
  };
  return (
  <GoalsContext.Provider value={{createGoals}}>
    {children}
  </GoalsContext.Provider>);
};
const useGoals = () => useContext(GoalsContext);
export default useGoals;
