import styled from "styled-components";

export const DivContainer = styled.div`
  @media (max-width: 320px) {
    background-color: var(--cor-primaria-light);
    min-height: 151px;
    max-height: 151px;
    width: 300px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--cor-primaria-light);
  max-height: 215px;
  min-height: 215px;
  width: 260px;
  margin: 30px;
  border-radius: 5px;
`;

export const DivInfo = styled.div`
  display: flex;
`;

export const DivNivel = styled.div`
  display: flex;
  margin-top: 0px;
  max-width: 300px;
  padding-right: 15px;

  div {
    width: 30px;
    height: 30px;
    background-color: ${(props) =>
      props.etiqueta == "Dificil"
        ? "var(--cor-etiqueta-nivel-dificil)"
        : props.etiqueta == "Medio"
        ? "var(--cor-etiqueta-nivel-medio)"
        : "var( --cor-etiqueta-nivel-facil)"};
    border-radius: 5px;
    box-shadow: 3px 3px 3px;
  }

  h3 {
    margin: 8px;
    max-width: 100px;
    flex-wrap: wrap;
  }
`;

export const DivCategoria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  max-width: 100%;
  flex-wrap: wrap;

  h3 {
    margin: 8px;
    max-width: 100px;
    flex-wrap: wrap;
  }
`;
export const TitleCategoria = styled.div`
  //max-width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  h3 {
    margin: 2px;
    margin-bottom: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  background-color: var(--bg-cor-menu-mobile-light);
  color: white;
  //padding: 5px;
  border-radius: 10px;
  align-items: center;
  button {
    background-color: var(--bg-cor-menu-mobile-light);
    color: white;
    font-size: 10px;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    text-decoration: underline;
  }
`;

export const DivConcluido = styled.div`
  width: 100px;
  height: 30px;
  background-color: ${(props) =>
    props.concluido === "true"
      ? "var( --cor-button-sair-grupo)"
      : "var(--cor-button-entrar-grupo)"};
  border-radius: 5px;
  box-shadow: 1px 3px 5px black;
  color: white;
  margin: 0 25px;
`;

export const DivFrequencia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-size: 12px;
    margin: 0 25px;
  }
`;
