import { NavegationCustumizer } from "./indexStyle";

const Navegation = ({ isOpen }) => {
  return (
    <NavegationCustumizer open={isOpen}>
      <ul>
        <li>Home</li>
        <li>Quem Somos</li>
        <li>Blog</li>
        <li>Login</li>
        <li>Cadastro</li>
      </ul>
    </NavegationCustumizer>
  );
};

export default Navegation;
