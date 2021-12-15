import Container from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import { HabitsContext } from "../../providers/IndividualsHabits";
import { useContext, useState } from "react";

const HabitsCard = ({ habit }) => {
  const { deleteHabits } = useContext(HabitsContext);
  console.log(habit);
  return (
    <Container>
      <header
        onClick={() => {
          let habit = document.querySelectorAll(".descriptionHabit");
          habit.classList.toggle("hidden");
        }}
      >
        <h2>{habit.title}</h2>
        <div>
          <p>
            Frequência: <span>{habit.frequency}</span>
          </p>
        </div>
        <button>
          <EditIcon></EditIcon>
        </button>
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
