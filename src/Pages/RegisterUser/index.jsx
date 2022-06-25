import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import ImageRegistration from "../../svg/main_image_of_registration.svg";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
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
  const formShema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formShema),
  });

  const functionHandleSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <RegistrationContent>
        <h2>Cadastre-se gratuitamente</h2>
        <ContainerForm>
          <Form onSubmit={handleSubmit(functionHandleSubmit)}>
            <FormHeader>
              <p>Cadastro</p>
              <IconFormHeader>
                <FaUser size={15} color="white" />
              </IconFormHeader>
            </FormHeader>
            <Input
              name="name"
              type="text"
              placeholder="Nome do usuário"
              icon={AiOutlineUser}
              register={register}
              error={errors.name?.message}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              icon={AiOutlineMail}
              register={register}
              error={errors.email?.message}
            />
            <Input
              name="password"
              type="password"
              placeholder="Crie sua senha"
              icon={AiOutlineLock}
              register={register}
              error={errors.password?.message}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <InfoHasAccount>
            Já possui conta? <Link to={"/login"}>Login</Link>
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
