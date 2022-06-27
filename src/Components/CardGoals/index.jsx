import {
  Container,
  Difficulty,
  GoalIsCompleted,
  PercentageAlreadyMade,
  Titulo,
} from "./indexStyle";

const CardGoals = () => {
  return (
    <Container>
      <Titulo>Estudar 10 hrs por dia</Titulo>
      <Difficulty>Easy</Difficulty>
      <PercentageAlreadyMade>10%</PercentageAlreadyMade>
      <GoalIsCompleted>Não Concluido</GoalIsCompleted>
    </Container>
  );
};
export default CardGoals;
