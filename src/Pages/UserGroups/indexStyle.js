import styled from "styled-components";

export const ContainerPage = styled.div`
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoPage = styled.div`
  @media (max-width: 560px) {
    margin-top: 20px;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-top: 15px;
  color: var(--color-text-light);
`;
export const Info = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    font-size: 0.9rem;
    width: 80%;
    margin: 20px auto;
  }
  @media (min-width: 600px) {
    padding: 20px;
    h1 {
      font-size: 1.6rem;
      text-align: left;
    }
    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;

export const DivFigure = styled.div`
  @media (max-width: 560px) {
    display: none;
  }

  img {
    width: 250px;
    height: 250px;
  }
`;

export const ContainerGroups = styled.div`
  color: var(--color-text-light);
  @media (max-width: 560px) {
    background-color: var(--color-second-light);
  }
  h2 {
    margin: 8px auto;
  }
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #d2d2d2;
`;

export const ListGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  @media (min-width: 560px) {
    flex-direction: row;
    height: 300px;
    width: 100%;
  }
`;
