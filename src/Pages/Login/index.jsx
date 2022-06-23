//import Input from "../../Components/Input";

import {
  ContainerForm,
  ContainerLogin,
  DivImage,
  DivTitleMobile,
} from "./indexStyle";

const Login = () => {
  return (
    <ContainerLogin>
      <DivTitleMobile>
        <h2>Acesse sua Conta</h2>
      </DivTitleMobile>
      <ContainerForm>
        <h1>Login</h1>
        <form>
          {/*<Input />*/}
          {/*<Input />*/}
          <input />
          <input />

          <button>Entrar</button>
          <p>Não tem conta? Faça seu Login</p>
        </form>
      </ContainerForm>
      <DivImage />
    </ContainerLogin>
  );
};

export default Login;
