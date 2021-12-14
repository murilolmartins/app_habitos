import { AuthContext } from "../../providers/Auth";
import { HabitsContext } from "../../providers/Individuals";
import { useContext } from "react";
import { Container } from "../../pages/SingUp/style";
import { InputName, InputDifficulty } from "./style";
import Button from "../Button";

const CreateHabits = () => {
  const { habits, setHabits, createHabits } = useContext(HabitsContext);

  return (
    <Container>
      <InputName type="text" placeholder="Nome do hábito aqui" name="title" />
      <InputName type="text" placeholder="Categoria" name="category" />
      <p> Dificuldade: </p>
      <div>
        <InputDifficulty
          type="button"
          placeholder="Fácil"
          name="difficulty"
          onClick={(e) => setHabits({ ...habits, difficulty: "Iniciante" })}
        />
        <InputDifficulty
          type="button"
          placeholder="Regular"
          name="difficulty"
          onClick={(e) => setHabits({ ...habits, difficulty: "Iniciante" })}
        />
        <InputDifficulty
          type="button"
          placeholder="Difícil"
          name="difficulty"
          onClick={(e) => setHabits({ ...habits, difficulty: "Iniciante" })}
        />
        <InputDifficulty
          type="button"
          placeholder="Muito difícil"
          name="difficulty"
          onClick={(e) => setHabits({ ...habits, difficulty: "Iniciante" })}
        />
      </div>
      <InputName type="text" placeholder="Frequência" name="frequency" />
      <InputName type="text" placeholder="Alcançado" name="achieved" />
      <Button
        type="submit"
        onClick={(e) => {
          createHabits(habits);
        }}
      >
        {" "}
        Entrar
      </Button>
    </Container>
  );
};
export default CreateHabits;
