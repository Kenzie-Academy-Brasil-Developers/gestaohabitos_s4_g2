import Button from "../Button";

import { FaUserEdit } from "react-icons/fa";

const HomeTitle = () => {
  return (
    <div>
      <h2>Crie sua gestão de habitos para ajudar na sua rotina </h2>
      <p>
        Planeje os habitos que você deseja obter os organize de forma mais
        adequada para você.
      </p>
      <div>
        <Button>
          Cadastre-se <FaUserEdit size="10" color="var(--color-second-light)" />
        </Button>
        <span>Plataforma gratuita? faça seu cadastro</span>
      </div>
    </div>
  );
};

export default HomeTitle;
