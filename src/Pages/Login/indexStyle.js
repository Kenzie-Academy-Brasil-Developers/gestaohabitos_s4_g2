import styled from "styled-components";
import imageLogin from "../../svg/image_login.svg";
export const ContainerLogin = styled.div`
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
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
    background-color: var(--color-primary-light);
    height: 350px;
    max-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 8px;

    h1 {
      margin-left: -200px;
      margin-top: 0px;
      font-size: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      margin-bottom: 25px;
      margin-top: 5px;
    }
  }
  background-color: var(--color-primary-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  max-width: 700px;

  span {
    color: #0064c0;
    text-decoration: none;
  }
`;

export const DivImage = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${imageLogin}) no-repeat center;
    background-size: contain;
  }
`;

export const DivInput = styled.div`
  width: 250px;
`;
