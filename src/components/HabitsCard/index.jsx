import Container from "./style";
import { Checkbox } from "@mui/material";
import { useContext, useState } from "react";
import { HabitsContext } from "../../providers/IndividualsHabits";
import CloseIcon from "@mui/icons-material/Close";

const HabitsCard = ({ habit, setModalHabitsOpen }) => {
  const {
    deleteHabits,
    editHabits,
    setHabitId,
    setCheckedHabit,
    checkedHabit,
  } = useContext(HabitsContext);

  const [checked, setChecked] = useState(() => habit.achieved);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setCheckedHabit(!checkedHabit);
    editHabits({ achieved: !checked });
  };

  return (
    <Container checked={checked}>
      <header
        onClick={(e) => {
          e.stopPropagation();
          let habitSection = document.querySelector(`.h${habit.id}`);
          habitSection.classList.toggle("hidden");
          setHabitId(habit.id);
        }}
      >
        <h2>{habit.title}</h2>
        <div>
          <p>
            Frequência: <span>{habit.frequency}</span>
          </p>
        </div>
        <CloseIcon
          onClick={(e) => {
            e.stopPropagation();
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
        <Checkbox
          color="success"
          size="large"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </section>
    </Container>
  );
};

export default HabitsCard;
