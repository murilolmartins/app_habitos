import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("@AppToken")) || "";
  });

  const authentication = (data) => {
    api
      .post("sessions/")
      .then((response) => {
        localStorage.setItem(JSON.stringify("@AppToken", response.data.access));
        setToken(JSON.parse(localStorage.getItem("@AppToken")));
        toast.success("Bem Vindo!");
      })
      .catch((err) => {
        toast.error("Usuario ou senha incorretos!");
      });
  };
  return (
    <AuthContext.Provider value={{ token, authentication }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
