import { Container } from "./styles";
import { useState } from "react";
import { useGroups } from "./../../providers/Groups/index";
import { useGoals } from "./../../providers/Goals/index";
import { useEffect, useContext } from "react";

import api from "./../../services/api";
import { AuthContext } from "./../../providers/Auth/index";

const DashboardGroupCard = ({ group, isOpen, id }) => {
  const [isHidden, setIsHidden] = useState("hidden");
  const [closed, setClosed] = useState(true);
  const { token } = useContext(AuthContext);

  const { setGroupId } = useGroups();
  const { goalsOnGroup } = useGoals();
  const [goal, setGoals] = useState([]);
  const [activities, setActivities] = useState([]);
  const [filterGoalOrActivities] = useState("");
  useEffect(() => {
    api
      .get(`/groups/${id}/`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setGoals(res.data.goals);
        setActivities(res.data.activities);
      })
      .catch((err) => console.log(err));
  }, [goal, goalsOnGroup, id, setGoals, token, filterGoalOrActivities]);

  return (
    <Container>
      <header
        onClick={(e) => {
          setGroupId(id);
          setClosed(!closed);
          setIsHidden(closed ? "noHidden" : "hidden");
        }}
      >
        <h2>{group.name}</h2>
      </header>
      <section className={`descriptionHabit ${isHidden}`}>
        <p className="category">
          Categoria: <span>{group.category}</span>
        </p>
        <div className="description">
          <p>Descrição:</p>
          <span>{group.description}</span>
        </div>

        <div className="goals">
          <h4>Metas</h4>
          <ul className="goalList">
            {goal.map((goal, index) => {
              return <li key={index}>{goal.title}</li>;
            })}
          </ul>
        </div>
        <div className="activities">
          <h4>Atividades</h4>
          <ul className="activitiesList">
            {activities.map((activitie, index) => {
              return <li key={index}>{activitie.title}</li>;
            })}
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default DashboardGroupCard;
