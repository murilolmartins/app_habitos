import Container from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";

const HabitsCard = ({ habit }) => {
  return (
    <Container>
      <header
        onClick={() => {
          let habit = document.querySelector(".descriptionHabit");
          habit.classList.toggle("hidden");
        }}
      >
        <h2>{habit.title}</h2>
        <div>
          <p>
            Frequência: <span>{habit.frequency}</span>
          </p>
        </div>
        <EditIcon></EditIcon>
      </header>
      <section className="descriptionHabit hidden">
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
