import Logo from "../../svg/logo.svg";

import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import Navegacao from "../Navegacao";
import { HeaderCustomizada } from "./indexStyle";
import { useState } from "react";

const Header = () => {
  const [aberto, setAberto] = useState(false);

  const controleNavegacao = () => {
    setAberto(!aberto);
  };

  return (
    <HeaderCustomizada>
      <figure>
        <img src={Logo} alt="logo gestão de habitos" />
      </figure>

      <div>
        {aberto ? (
          <FiX
            size="30"
            onClick={controleNavegacao}
            color="var(--cor-primaria-light)"
          />
        ) : (
          <FaBars size="30" onClick={controleNavegacao} />
        )}
      </div>

      <Navegacao aberto={aberto} />
    </HeaderCustomizada>
  );
};

export default Header;
