import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    const idUser = jwt_decode(token).user_id;
    setId(idUser);
    loadUser(idUser);
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
    <UserContext.Provider value={{ user, id }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
