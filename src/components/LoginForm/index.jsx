import Button from "./../Button";
import Input from "./../Input";
import { Container, Form, Title,Errors } from "./styles";
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
  const handleForm = (data) => {
    console.log(data)
  };
  return (
    <Container>
      <Title>Entrar com uma conta existente</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input type="text" placeholder="Email" register={register} name='email' />
        <Errors>{errors.email?.message}</Errors>
        <Input type="text" placeholder="Senha" register={register} name='password' />
        <Errors password>{errors.password?.message}</Errors>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
export default LoginForm;
