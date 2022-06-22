import { NavegacaoCustumizada } from "./indexStyle";

const Navegacao = ({ aberto }) => {
  return (
    <NavegacaoCustumizada aberto={aberto}>
      <ul>
        <li>Home</li>
        <li>Quem Somos</li>
        <li>Blog</li>
        <li>Login</li>
        <li>Cadastro</li>
      </ul>
    </NavegacaoCustumizada>
  );
};

export default Navegacao;
