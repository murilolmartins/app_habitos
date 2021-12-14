import { AuthContext } from "../../providers/Auth";
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
  const { createHabits } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
    achieved: yup.bool().required("Alcance obrigatória"),
    how_much_achieved: yup.number().required("Porcentagem"),
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
          <h1>Criar hábito</h1>
          <CloseIcon onClick={() => setIsOpen(false)}></CloseIcon>
        </header>
        <form onSubmit={handleSubmit(createHabits)}>
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
          <Input
            placeholder="Alcançado"
            register={register}
            name="achieved"
          ></Input>
          <Errors>{errors.how_much_achieved?.message}</Errors>
          <Input
            type="number"
            placeholder="Porcentagem"
            register={register}
            name="how_much_achieved"
          ></Input>
          <Button type="submit"> Criar hábito</Button>
        </form>
      </Container>
    </Modal>
  );
};
export default CreateHabits;
