import styled from "styled-components";
import imagemLogin from "../../svg/image_login.svg";

export const ContainerLogin = styled.div`
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  height: 80vh;
  display: flex;
  align-items: stretch;
`;

export const DivTitleMobile = styled.div`
  @media (min-width: 321px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  @media (max-width: 321px) {
    background-color: var(--cor-primaria-light);
    height: 300px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5px;

    h1 {
      margin-left: -200px;
      margin-top: -50px;
      font-size: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input {
      margin-bottom: 20px;
    }
    button {
      margin-bottom: 25px;
      margin-top: 5px;
    }
  }
  background-color: var(--cor-primaria-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  max-width: 700px;
`;

export const DivImage = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${imagemLogin}) no-repeat center;
    background-size: contain;
  }
`;
