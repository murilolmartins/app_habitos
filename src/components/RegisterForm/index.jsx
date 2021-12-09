import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { InputErros, ContainerRegister } from "./style.js";
import Input from "../Input/styles.js";
import Container from "../Button/styles.js";

export default function RegisterForm() {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome de usuário obrigatório")
      .matches(
        "^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$",
        "O nome deve conter letras, e pode conter hífen"
      ),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .matches(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})",
        "A senha deve conter pelo menos 8 caracteres, letra maiúscula e minúscula, número, caracter especial."
      )
      .required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <ContainerRegister>
      <form onSubmit={handleSubmit()} className="form-container">
        <Input
          onChange={(e) => console.log(e.target.value)}
          placeholder="Nome de usuário*"
          {...register("username")}
        />
        <InputErros> {errors.username && errors.username.message} </InputErros>
        <Input placeholder="Endereço de email*" {...register("email")} />
        <InputErros>{errors.email && errors.email.message} </InputErros>
        <Input placeholder="Senha*" {...register("password")} />
        <InputErros> {errors.password && errors.password.message} </InputErros>
      </form>
      <Container type="submit"> Enviar </Container>
    </ContainerRegister>
  );
}
