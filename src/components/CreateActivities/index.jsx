import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Container } from "./style";
import { useActivities } from "../../providers/Activities";

const CreateActivities = ({ isOpen, setIsOpen }) => {
  const { createActivity } = useActivities();
  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    realization_time: yup.string().required("Data Obrigatoria").max(16),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container onSubmit={handleSubmit(createActivity)}>
        <header>
          <h2>Criar Atividade</h2>
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
          <Button type="submit">Criar Atividade</Button>
        </form>
      </Container>
    </Modal>
  );
};
export default CreateActivities;
