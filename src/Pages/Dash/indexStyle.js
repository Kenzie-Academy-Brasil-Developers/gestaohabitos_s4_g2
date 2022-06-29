import styled from "styled-components";

export const ContainerPageHabits = styled.div``;

export const ContainerCreateHbits = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const InformationsHabits = styled.div`
  width: 50%;
`;

export const ContainerFomr = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  width: 50%;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    display: none;
  }
`;
