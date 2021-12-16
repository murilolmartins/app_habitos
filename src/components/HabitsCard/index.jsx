import Container from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { HabitsContext } from "../../providers/IndividualsHabits";
import CloseIcon from "@mui/icons-material/Close";

const HabitsCard = ({ habit, setModalHabitsOpen }) => {
  const { setIsNotCreatedHabits, deleteHabits } = useContext(HabitsContext);
  return (
    <Container>
      <header
        onClick={(e) => {
          let habitSection = document.querySelector(`.h${habit.id}`);
          habitSection.classList.toggle("hidden");
        }}
      >
        <h2>{habit.title}</h2>
        <div>
          <p>
            Frequência: <span>{habit.frequency}</span>
          </p>
        </div>
        <EditIcon
        //   onClick={() => {
        //     setIsNotCreatedHabits(false);
        //     setModalHabitsOpen(true);
        //   }}
        ></EditIcon>
        <CloseIcon
          onClick={() => {
            console.log(habit);
            deleteHabits(habit);
          }}
        ></CloseIcon>
      </header>
      <section className={`descriptionHabit h${habit.id} hidden`}>
        <div>
          <p>
            Dificuldade: <span>{habit.difficulty}</span>
          </p>
        </div>
        <div>
          <p>
            Categoria: <span>{habit.category}</span>
          </p>
        </div>
        <Checkbox color="success" size="large" />
      </section>
    </Container>
  );
};

export default HabitsCard;
