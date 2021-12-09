import Button from "./../Button";
import Input from "./../Input";
import { Container, Form, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {};
  return (
    <Container>
      <Title>Entrar com uma conta existente</Title>
      <Form onsubmit={handleSubmit(handleForm)}>
        <Input type="text" placeholder="Email" register={register} name='email' />
        <Input type="text" placeholder="Senha" register={register} name='password' />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
export default LoginForm;
