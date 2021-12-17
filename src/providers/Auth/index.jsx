import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("@AppToken")) || "";
  });

  const authentication = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        localStorage.setItem("@AppToken", JSON.stringify(response.data.access));
        setToken(JSON.parse(localStorage.getItem("@AppToken")));

        toast.success("Bem Vind@!");
        history.push("/dashboard"); //alterado para dashboard

      })
      .catch((err) => {
        toast.error("Usuario ou senha incorretos!");
      });
  };
  const signUpRequisition = (data) => {
    api
      .post("users/", data)
      .then((response) => {
        toast.success("Login liberado!");
      })
      .catch((err) => {
        toast.error("Usuário já existente!");
      });
  };
  const handleLogOut = () => {
    history.push("/");
    localStorage.clear();
    setToken();
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        authentication,
        signUpRequisition,
        handleLogOut,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
