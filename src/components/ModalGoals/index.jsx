import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Container, Errors } from "./style";
import {ContainerInput} from './../RegisterForm/style';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import {useGoals} from './../../providers/Goals/index';
import {useEffect} from 'react'
const ModalGoals = ({ isOpen, setIsOpen, isNotCreatedGoal , group }) => {
  const {createGoals,updateGoalData,updateGoalAchieved,deleteGoal} = useGoals();
  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(()=>{
    updateGoalAchieved()
  },[])
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          {isNotCreatedGoal?<h1>Criar meta</h1>:<h1>Atualizar meta</h1>}
          <CloseIcon onClick={() => setIsOpen(false)}></CloseIcon>
        </header>
        <form onSubmit={isNotCreatedGoal?handleSubmit(createGoals):handleSubmit(updateGoalData)}>
            <Errors>{errors.title?.message}</Errors>
            <Input placeholder="Titulo" register={register} name="title"></Input>
          
          <div className="status">
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
          <Button type="submit">{isNotCreatedGoal?'Cadastrar':'Atualizar'}</Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalGoals;
