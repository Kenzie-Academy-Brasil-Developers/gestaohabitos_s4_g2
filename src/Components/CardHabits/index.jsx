import {
  DivDone,
  DivButton,
  DivCategory,
  DivContainer,
  DivFrequency,
  DivInfo,
  DivLevel,
  TitleCategory,
} from "./indexStyle";

const CardHabits = ({ habits }) => {
  const Test = () => {
    console.log("cliquei Aqui");
  };
  return (
    <DivContainer>
      <DivInfo>
        <DivLevel tag="Dificil">
          <div></div>
          <h3>Dificil</h3>
        </DivLevel>
        <DivCategory>
          <DivButton>
            <button
              onClick={() => {
                Test();
              }}
            >
              Editar
            </button>
            |
            <button
              onClick={() => {
                Test();
              }}
            >
              Deletar
            </button>
          </DivButton>
          <TitleCategory>
            <h3>Saude</h3>
          </TitleCategory>
        </DivCategory>
      </DivInfo>
      <h4>Correr na Esteira</h4>
      <DivFrequency>
        <DivDone done="true">Concluido</DivDone>

        <span>Diaria</span>
      </DivFrequency>
    </DivContainer>
  );
};

export default CardHabits;
