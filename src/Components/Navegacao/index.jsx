import { Link } from "react-router-dom";
import { NavegationCustumizer } from "./indexStyle";

const Navegation = ({ isOpen }) => {
  return (
    <NavegationCustumizer open={isOpen}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Quem Somos</li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Cadastro</Link>
        </li>
      </ul>
    </NavegationCustumizer>
  );
};

export default Navegation;
