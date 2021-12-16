import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "./style";
import { useActivities } from "../../providers/Activities";
import {useGroups} from './../../providers/Groups';
import {ButtonsUpdate} from './../../components/ModalGoals/style';
const CreateActivities = ({ isOpen, setIsOpen }) => {
  const { createActivity,updateActivity, deleteActivity,setIsNotCreatedActivitie} = useActivities();
  const {isNotCreatedActivitie,isCreated,actId} = useGroups();

  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    realization_time: yup.string().required("Data Obrigatoria").max(16,'Máximo de 16 caracteres'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container onSubmit={isNotCreatedActivitie?handleSubmit(updateActivity):handleSubmit(createActivity)}>
        <header>
          {isNotCreatedActivitie?(<h2>Atualizar Atividade</h2>):(<h2>Criar Atividade</h2>)}
          <CloseIcon onClick={()=> {
            setIsNotCreatedActivitie(false);
            setIsOpen(false)}}></CloseIcon>

        </header>
        <form>
          <Input placeholder="Titulo" register={register} name="title" />
          <p>{errors.title?.message}</p>
          <Input
            type="datetime-local"
            placeholder="Data"
            register={register}
            name="realization_time"
          />
          <p>{errors.realization_time?.message}</p>
          {/* <Input placeholder="group:" register={register} name="group" />
          <p>{errors.group?.message}</p> */}
          <Button type="submit">{isNotCreatedActivitie?'Atualizar atividade':'Criar Atividade'}</Button>
        </form>
       {isNotCreatedActivitie&&
       <ButtonsUpdate>
            <Button onClick={()=>deleteActivity(actId)}>Deletar</Button>
          </ButtonsUpdate>}
      </Container>
    </Modal>
  );
};
export default CreateActivities;
