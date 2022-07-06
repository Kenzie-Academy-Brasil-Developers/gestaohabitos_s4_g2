import {
  Container,
  Picture,
  Card,
  CardSecundary,
  CardThird,
  CircleBlue,
  CirclePink,
  CircleBlack,
  ContainerCircles,
} from "./indexStyle";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const CardAboutUs = ({ name, office, description, social, profile }) => {
  return (
    <Container>
      <CardSecundary>
        <Picture
          src={profile}
          alt="Foto de perfil do desenvolvedor do projeto"
        />
        <CardThird>
          <h2>{name}</h2>
          <h3>{office} / frontEnd</h3>
        </CardThird>
      </CardSecundary>
      <h3>Sobre mim:</h3>
      <Card>
        <p>{description}</p>
      </Card>
      <ContainerCircles>
        <CircleBlue>
          <a href={social.linkedin}>
            <FaLinkedinIn size="20" color="var(--color-primary-light)" />
          </a>
        </CircleBlue>
        <CirclePink>
          <a href={social.instagram}>
            <FaInstagram size="20" color="var(--color-primary-light)" />
          </a>
        </CirclePink>
        <CircleBlack>
          <a href={social.github}>
            <BsGithub size="20" color="var(--color-primary-light)" />
          </a>
        </CircleBlack>
      </ContainerCircles>
    </Container>
  );
};

export default CardAboutUs;
