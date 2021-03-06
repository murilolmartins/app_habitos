import { HabitsContext } from "../../providers/IndividualsHabits";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Container, Errors } from "./style";
import CloseIcon from "@mui/icons-material/Close";

const CreateHabits = ({ isOpen, setIsOpen }) => {

  const { createHabits, editHabits, isNotCreatedHabits } =
    useContext(HabitsContext);


  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          {isNotCreatedHabits ? <h1>Criar hábito</h1> : <h1>Editar hábito</h1>}
          <CloseIcon onClick={() => setIsOpen(false)}></CloseIcon>
        </header>
        <form
          onSubmit={
            isNotCreatedHabits
              ? handleSubmit(createHabits)
              : handleSubmit(editHabits)
          }
        >
          <Errors>{errors.title?.message}</Errors>
          <Input placeholder="Titulo" register={register} name="title"></Input>
          <Errors>{errors.category?.message}</Errors>
          <Input
            placeholder="Categoria"
            register={register}
            name="category"
          ></Input>

          <div className="status">
            <Errors>{errors.difficulty?.message}</Errors>
            <label>Selecionar dificuldade:</label>
            <select
              name="difficulty"
              id="status-select"
              {...register("difficulty")}
            >
              <option value="Facil">Facil</option>
              <option value="Medio">Medio</option>
              <option value="Dificil">Dificil</option>
            </select>
          </div>
          <Errors>{errors.frequency?.message}</Errors>
          <Input
            placeholder="Frequência"
            register={register}
            name="frequency"
          ></Input>
          <Errors>{errors.achieved?.message}</Errors>
          <Button type="submit">
            {" "}
            {isNotCreatedHabits ? "Cadastrar" : "Editar"}
          </Button>
        </form>
      </Container>
    </Modal>
  );
};
export default CreateHabits;
