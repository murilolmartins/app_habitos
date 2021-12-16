import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    if (!!token) {
      const idUser = jwt_decode(token).user_id;
      setId(idUser);
      loadUser(idUser);
    }
  }, [token]);

  const editProfile = (data) => {
    api
      .patch(`users/${id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        toast.success("Usuario Atualizado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Esse nome de usuario ja existe");
      });
  };

  const loadUser = (id) => {
    api
      .get(`users/${id}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{ user, id, userModalOpen, setUserModalOpen, editProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
