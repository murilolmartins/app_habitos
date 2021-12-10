import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { InputErros, ContainerRegister, ContainerInput } from "./style.js";
import { Title, Form, Errors } from "./../LoginForm/styles";
import Input from "../Input/index";
import Button from "../Button/index";
import { useContext } from "react";
import { AuthContext } from "./../../providers/Auth/index";
export default function RegisterForm() {
  const { signUpRequisition } = useContext(AuthContext);
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome de usuário obrigatório")
      .matches(/^[a-zA-Z\s]*$/gi, "Nome deve conter apenas letras"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(/[a-z]/g, "Mínimo um dígito minúsculo")
      .matches(/[A-Z]/g, "Mínimo um digito maiúsculo")
      .matches(/[0-9]/g, "Mínimo um número")
      .matches(/[$@$!%*#?&´^~/><+=[\]{",;°§`º_().}\\¨-]/g, "Mínimo um símbolo")
      .required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <ContainerRegister>
      <Title>Criar uma nova conta</Title>
      <Form onSubmit={handleSubmit(signUpRequisition)}>
        <ContainerInput>
          <Input
            onChange={(e) => console.log(e.target.value)}
            placeholder="Nome de usuário*"
            register={register}
            name="username"
          />
          <Errors > {errors.username && errors.username.message} </Errors>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Endereço de email*"
            register={register}
            name="email"
          />
          <Errors >{errors.email && errors.email.message} </Errors>
        </ContainerInput>
        <ContainerInput>
          <Input placeholder="Senha*" register={register} name="password" />
          <Errors > {errors.password && errors.password.message} </Errors>
        </ContainerInput>
        <Button type="submit"> Enviar </Button>
      </Form>
    </ContainerRegister>
  );
}
