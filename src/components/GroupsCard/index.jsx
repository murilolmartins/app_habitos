import { Container, Cards, ContainerInfo } from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useState } from "react";
import { useGroups } from "./../../providers/Groups/index";
import { useGoals } from "./../../providers/Goals/index";
import {useActivities} from './../../providers/Activities';
import GoalCard from "./../GoalCard";
import ActivitieCard from "./../ActivitieCard";
import { useEffect ,useContext} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Add1, ContainerCards,DivSelect } from "./styles";
import api from './../../services/api';
import {AuthContext} from './../../providers/Auth/index';
const GroupCard = ({ group, isOpen, id }) => {
  const [isHidden, setIsHidden] = useState("hidden");
  const [closed, setClosed] = useState(true);
  const {token} = useContext(AuthContext);

  const {
    userGroupsList,
    setIsNotCreatedGroup,
    groupId,
    setGroupId,
    unsubscribe,
    setGoalsList,
    setIsNotCreatedActivitie
  } = useGroups();
  const {
    goalsOnGroup,
    getGoalsGroup,
    setIsModalGoalOpen,
    setIsNotCreatedGoal,
  } = useGoals();
  const {setCreateActivitiesOpen} = useGroups();
  const [goal,setGoals] = useState([]);
  const [activities,setActivities] = useState([]);
  const [filterGoalOrActivities,setFilterGoalOrActivities] = useState('');
  useEffect(() => {
      api
        .get(`/groups/${id}/`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setGoals(res.data.goals);
          setActivities(res.data.activities);
        })
        .catch((err) => console.log(err));
   
  }, [goal, goalsOnGroup, id, setGoals, token,filterGoalOrActivities]);
 
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
        <div>
          <p>
            <span>{group.description}</span>
          </p>
        </div>
        <EditIcon
          onClick={(e) => {
            e.stopPropagation();
            isOpen(true);
            setGroupId(id);
            setIsNotCreatedGroup(true);
          }}
        ></EditIcon>
      </header>
      <section className={`descriptionHabit ${isHidden}`}>
        <ContainerInfo>
          <DivSelect>
            <label>Selecionar filtro:</label>
            <select name="difficulty" id="status-select" onChange={(e)=>setFilterGoalOrActivities(e.target.value)}>
              <option value="Activities">Activities</option>
              <option value="Goals">Goals</option>
            </select>
          </DivSelect>

          <div>
            <p>
              Categoria: <span>{group.category}</span>
            </p>
          </div>
          <CancelPresentationIcon
            onClick={() => {
              setGroupId(id);
              unsubscribe(id);
            }}
          />
        </ContainerInfo>
        <ContainerCards>
          <Cards isHidden>
           { filterGoalOrActivities==='Goals'?(<Add1>
              <h3>Adicionar goal</h3>
              <Button
                onClick={() => {
                  setIsNotCreatedGoal(false);
                  setIsModalGoalOpen(true);
                }}
              >
                <AddIcon></AddIcon>
              </Button>
            </Add1>):
            (<Add1>
              <h3>Adicionar atividade</h3>
              <Button onClick={() => {
                setIsNotCreatedActivitie(false);
                setCreateActivitiesOpen(true)}}>
                <AddIcon></AddIcon>
              </Button>
            </Add1>)}
          </Cards>

          <Cards>
            {filterGoalOrActivities==='Goals'?(goal.map((goal, index) => {
              return <GoalCard key={index} goal={goal}></GoalCard>;
            })):(activities.map((activitie, index) => {
              return <ActivitieCard key={index} activitie={activitie}></ActivitieCard>;
            }))}
          </Cards>
        </ContainerCards>
      </section>
    </Container>
  );
};

export default GroupCard;
