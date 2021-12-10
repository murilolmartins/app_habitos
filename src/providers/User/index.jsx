import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = jwt_decode(token).user_id;
    loadUser(id);
  }, [token]);

  const loadUser = (id) => {
    api
      .get(`users/${id}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
