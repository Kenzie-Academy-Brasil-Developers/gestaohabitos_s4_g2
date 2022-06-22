import {
  DivConcluido,
  DivButton,
  DivCategoria,
  DivContainer,
  DivFrequencia,
  DivInfo,
  DivNivel,
  TitleCategoria,
} from "./indexStyle";

const CardHabitos = ({ habitos }) => {
  const Teste = () => {
    console.log("cliquei Aqui");
  };
  return (
    <DivContainer>
      <DivInfo>
        <DivNivel etiqueta="Dificil">
          <div></div>
          <h3>Dificil</h3>
        </DivNivel>
        <DivCategoria>
          <DivButton>
            <button
              onClick={() => {
                Teste();
              }}
            >
              Editar
            </button>
            |
            <button
              onClick={() => {
                Teste();
              }}
            >
              Deletar
            </button>
          </DivButton>
          <TitleCategoria>
            <h3>Saude</h3>
          </TitleCategoria>
        </DivCategoria>
      </DivInfo>
      <h4>Correr na Esteira</h4>
      <DivFrequencia>
        <DivConcluido concluido="true">Concluido</DivConcluido>

        <span>Diaria</span>
      </DivFrequencia>
    </DivContainer>
  );
};

export default CardHabitos;
