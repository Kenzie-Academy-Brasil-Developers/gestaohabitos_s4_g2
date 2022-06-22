import Logo from "../../svg/logo.svg";

import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import Navegacao from "../Navegacao";

const Header = () => {
  return (
    <header>
      <figure>
        <img src={Logo} alt="logo gestão de habitos" />
      </figure>

      <div>
        <FaBars size="30" />
      </div>

      <Navegacao />
    </header>
  );
};

export default Header;
