import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Container, Errors } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import {useGroups} from './../../providers/Groups/index';
import {useEffect} from 'react'
const ModalGroup = ({ isOpen, setIsOpen }) => {
 
  const {createGroup,isNotCreatedGroup,updateGroup,subscribeOnGroup,unsubscribe,myGroups} = useGroups();
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    category: yup.string().required("Categoria obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(()=>{
    // subscribeOnGroup();
    // unsubscribe();
    myGroups()
  },[subscribeOnGroup,unsubscribe,myGroups])
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          {isNotCreatedGroup ? <h1>Criar grupo</h1> : <h1>Editar grupo</h1>}
          <CloseIcon onClick={() => setIsOpen(false)}></CloseIcon>
        </header>
        <form onSubmit={isNotCreatedGroup?handleSubmit(createGroup):handleSubmit(updateGroup)}>
          <Errors>{errors.name?.message}</Errors>
          <Input placeholder="Nome" register={register} name="name"></Input>
          <Errors>{errors.description?.message}</Errors>
          <Input
            placeholder="Descrição"
            register={register}
            name="description"
          ></Input>
          <Errors>{errors.category?.message}</Errors>
          <Input
            placeholder="Categoria"
            register={register}
            name="category"
          ></Input>
          <Button type="submit">
            {isNotCreatedGroup ? "Cadastrar" : "Editar"}
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalGroup;
