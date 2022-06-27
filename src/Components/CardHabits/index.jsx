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
        <DivLevel tag={habits.difficulty}>
          <div></div>
          <h3>{habits.difficulty}</h3>
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
            <h3>{habits.category}</h3>
          </TitleCategory>
        </DivCategory>
      </DivInfo>
      <h4>{habits.title}</h4>
      <DivFrequency>
        <DivDone done="true">Concluido</DivDone>

        <span>{habits.frequency}</span>
      </DivFrequency>
    </DivContainer>
  );
};

export default CardHabits;
