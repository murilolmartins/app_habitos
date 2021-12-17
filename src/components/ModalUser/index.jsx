import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Container, Errors } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const ModalUser = () => {
  const { userModalOpen, setUserModalOpen, user, editProfile } =
    useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().required("Titulo obrigatório"),
    email: yup.string().required("Dificuldade obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Modal isOpen={userModalOpen} setIsOpen={setUserModalOpen}>
      <Container>
        <header>
          <h1>Perfil</h1>
          <CloseIcon onClick={() => setUserModalOpen(false)}></CloseIcon>
        </header>
        <div className="userData">
          <h2>
            Usuario:<span>{user.username}</span>
          </h2>
          <h2>
            Email :<span>{user.email}</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit(editProfile)}>
          <Errors>{errors.username?.message}</Errors>
          <Input
            placeholder="Usuario"
            register={register}
            name="username"
          ></Input>
          <Errors>{errors.username?.message}</Errors>
          <Input placeholder="Email" register={register} name="email"></Input>
          <Button type="submit">Editar</Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalUser;
