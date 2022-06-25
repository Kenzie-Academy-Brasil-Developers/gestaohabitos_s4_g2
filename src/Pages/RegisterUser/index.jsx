import { FaUser } from "react-icons/fa";
import ImageRegistration from "../../svg/main_image_of_registration.svg";
import Button from "../../Components/Button";
import {
  Container,
  ContainerForm,
  ContentImage,
  Form,
  RegistrationContent,
  InfoHasAccount,
  FormHeader,
  IconFormHeader,
} from "./indexStyle";

const RegisterUser = () => {
  return (
    <Container>
      <RegistrationContent>
        <h2>Cadastre-se gratuitamente</h2>
        <ContainerForm>
          <Form>
            <FormHeader>
              <p>Cadastro</p>
              <IconFormHeader>
                <FaUser size={15} color="white" />
              </IconFormHeader>
            </FormHeader>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Button>Cadastrar</Button>
          </Form>
          <InfoHasAccount>
            Já possui conta? <span>Login</span>
          </InfoHasAccount>
        </ContainerForm>
      </RegistrationContent>

      <ContentImage>
        <img src={ImageRegistration} alt="Imagem de cadastro" />
      </ContentImage>
    </Container>
  );
};
export default RegisterUser;
