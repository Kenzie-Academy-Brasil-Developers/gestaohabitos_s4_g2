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
  //margin-top: 35px;
  padding-top: 15px;
`;
export const Info = styled.div`
  @media (max-width: 560px) {
    padding: 20px;
  }

  p {
    margin-top: 25px;
    width: 350px;
    margin-left: 25px;
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
  @media (max-width: 560px) {
    background-color: var(--color-second-light);
    padding: 15px;
    h2 {
      margin-left: 25px;
      margin-bottom: 10px;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #d2d2d2;
`;

export const ListGroups = styled.div`
  @media (max-width: 560px) {
    height: 300px;
    width: 100%;
    overflow-x: auto;
  }
  margin-top: 0px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 1200px;
  overflow-y: auto;
`;
