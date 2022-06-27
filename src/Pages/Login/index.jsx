import Input from "../../Components/Input";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import Button from "../../Components/Button";
import {
  ContainerForm,
  ContainerLogin,
  DivImage,
  DivInput,
  DivTitleMobile,
} from "./indexStyle";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";

const Login = () => {
  const { onSubmitFunction } = useContext(LoginContext);
  const { autenticacao } = useContext(LoginContext);

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(8, "minimo de 8 digitos")
      .required("campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (autenticacao) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ContainerLogin>
      <DivTitleMobile>
        <h2>Acesse sua Conta</h2>
      </DivTitleMobile>
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <DivInput>
            <Input
              label="Usuario"
              name="username"
              register={register}
              icon={AiOutlineUser}
              placeholder={"Nome do Usuario"}
              error={errors.username?.message}
            />
            <Input
              label="Senha"
              type="password"
              name="password"
              register={register}
              icon={AiOutlineLock}
              placeholder={"Senha"}
              error={errors.password?.message}
            />
            {/*<input />*/}
            {/*<input />*/}
          </DivInput>

          <Button>Entrar</Button>
          <p>
            Não tem conta?{" "}
            <Link to="/register">
              <span>Faça seu Cadastro </span>
            </Link>
          </p>
        </form>
      </ContainerForm>
      <DivImage />
    </ContainerLogin>
  );
};

export default Login;
