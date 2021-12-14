import Button from "./../Button";
import Input from "./../Input";
import { Container, Form, Title, Errors } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "../../providers/Auth";
import { useContext } from "react";
import { ContainerInput } from "../RegisterForm/style";

const LoginForm = () => {
  const { authentication } = useContext(AuthContext);
  const schema = yup.object().shape({
    username: yup.string().required("Usuario obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Title>Entrar com uma conta existente</Title>
      <Form onSubmit={handleSubmit(authentication)}>
        <ContainerInput>
          <Input
            type="text"
            placeholder="Usuario*"
            register={register}
            name="username"
          />
          <Errors>{errors.username?.message}</Errors>
        </ContainerInput>
        <ContainerInput>
          <Input
            type="password"
            placeholder="Senha*"
            register={register}
            name="password"
          />
          <Errors>{errors.password?.message}</Errors>
        </ContainerInput>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
export default LoginForm;
