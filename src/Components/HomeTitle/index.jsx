import Button from "../Button";

import { FaUserEdit } from "react-icons/fa";
import { BoxButton, Container } from "./indexStyle";

const HomeTitle = () => {
  return (
    <Container>
      <h2>Crie sua gestão de habitos para ajudar na sua rotina </h2>
      <p>
        Planeje os habitos que você deseja obter os organize de forma mais
        adequada para você.
      </p>
      <BoxButton>
        <Button>
          Cadastre-se <FaUserEdit size="15" color="var(--color-second-light)" />
        </Button>
        <span>Plataforma gratuita? faça seu cadastro</span>
      </BoxButton>
    </Container>
  );
};

export default HomeTitle;
