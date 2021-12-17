import Container from "./style";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { HabitsContext } from "../../providers/IndividualsHabits";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DashboardHabitsCard = ({ habit, setModalHabitsOpen }) => {
  const { setIsNotCreatedHabits, deleteHabits } = useContext(HabitsContext);
  return (
    <Container>
      <header
        onClick={(e) => {
          let habitSection = document.querySelector(`.h${habit.id}`);
          habitSection.classList.toggle("hidden");
        }}
      >
        <div className="cardHeader">
          <h2>{habit.title}</h2>
          <p>
            Frequência: <span> {habit.frequency} </span>
          </p>
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
        {/* <div className="buttons">
          <Checkbox color="success" size="large" />
          <span className="deleteIcon">
            <DeleteForeverIcon
              onClick={() => {
                console.log(habit);
                deleteHabits(habit);
              }}
            ></DeleteForeverIcon>
          </span>
        </div> */}
      </section>
    </Container>
  );
};

export default DashboardHabitsCard;
