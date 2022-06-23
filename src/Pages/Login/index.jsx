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

const Login = () => {
  return (
    <ContainerLogin>
      <DivTitleMobile>
        <h2>Acesse sua Conta</h2>
      </DivTitleMobile>
      <ContainerForm>
        <h1>Login</h1>
        <form>
          <DivInput>
            <Input icon={AiOutlineUser} placeholder={"Nome do Usuario"} />
            <Input icon={AiOutlineLock} placeholder={"Senha"} />
            {/*<input />*/}
            {/*<input />*/}
          </DivInput>

          <Button>Entrar</Button>
          <p>
            Não tem conta?{" "}
            <Link to="/cadastro">
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
