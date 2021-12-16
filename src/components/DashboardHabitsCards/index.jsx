import Container from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { HabitsContext } from "../../providers/IndividualsHabits";
import CloseIcon from "@mui/icons-material/Close";

const DashboardHabitsCard = ({ habit, setModalHabitsOpen }) => {
  const { setIsNotCreatedHabits, deleteHabits } = useContext(HabitsContext);
  return (
    <Container
      onClick={(e) => {
        let habitSection = document.querySelector(`.h${habit.id}`);
        habitSection.classList.toggle("hidden");
      }}
    >
      <header>
        <div className="cardHeader">
          <h2>{habit.title}</h2>
          <p>
            Frequência: <span> {habit.frequency} </span>
          </p>
        </div>
        <div className="buttons">
          <CloseIcon
            onClick={() => {
              console.log(habit);
              deleteHabits(habit);
            }}
          ></CloseIcon>
        </div>
      </header>
      <section className={`descriptionHabit h${habit.id} hidden`}>
        <div className="habitInfo">
          <p>
            Dificuldade: <span>{habit.difficulty}</span>
          </p>
        </div>
        <div className="habitInfo">
          <p>
            Categoria: <span>{habit.category}</span>
          </p>
        </div>
        <Checkbox color="success" size="large" />
      </section>
    </Container>
  );
};

export default DashboardHabitsCard;
