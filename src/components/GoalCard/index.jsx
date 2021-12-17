import { Container } from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import { useGoals } from "./../../providers/Goals";
import { useEffect } from "react";
const GoalCard = ({ goal }) => {
  const { id } = goal;
  const { setIsModalGoalOpen, setIsNotCreatedGoal, setGoalId, isAchieved } =
    useGoals();

  useEffect(() => {
    setGoalId(id);
  }, [id, setGoalId]);
  return (
    <Container achieved={isAchieved}>
      <div>
        <h2>{goal.title}</h2>
        <p>{goal.difficulty}</p>
      </div>
      <div>
        <EditIcon
          onClick={() => {
            setGoalId(id);
            setIsNotCreatedGoal(true);
            setIsModalGoalOpen(true);
          }}
        ></EditIcon>
      </div>
    </Container>
  );
};
export default GoalCard;
