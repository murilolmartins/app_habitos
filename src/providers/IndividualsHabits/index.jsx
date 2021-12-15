import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../Auth";
import { UserContext } from "../User";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const { id } = useContext(UserContext);

  const [isNotCreatedHabits, setIsNotCreatedHabits] = useState(false);

  const [habitsInfo, setHabitsInfo] = useState([]);

  const [habits, setHabits] = useState([])

  const createHabits = (data) => {
    api
      .post(
        "habits/",
        { ...data, user: id, achieved: false, how_much_achieved: 0 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Hábito criado com sucesso!");
        setHabitsInfo(res.data);
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar esse hábito");
      });
  };

  const editHabits = (data) => {
    api
      .patch(`habits/:${habitsInfo.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito editado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível editar esse hábito");
      });
  };

  useEffect(() => {    
      api
        .get("habits/personal/`", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setHabits([...habits, res.data]);
        })
        .catch((err) => {
          console.log(err);
        });    
  }, []);


 

  const deleteHabits = (data) => {
    api
      .delete(`habits/:${habitsInfo.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Hábito deletado com sucesso!");
      })
      .catch((err) => {
        toast.error("Não foi possível deletar um hábito inexistente");
      });
  };

  return (
    <HabitsContext.Provider
      value={{
        createHabits,
        editHabits,
        deleteHabits,
        isNotCreatedHabits,
        setIsNotCreatedHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
