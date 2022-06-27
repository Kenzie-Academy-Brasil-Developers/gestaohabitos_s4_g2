import {
  Container,
  Difficulty,
  GoalIsCompleted,
  PercentageAlreadyMade,
  Title,
} from "./indexStyle";

const CardGoals = () => {
  return (
    <Container>
      <Title>Estudar 10 hrs por dia</Title>
      <Difficulty>Easy</Difficulty>
      <PercentageAlreadyMade>10%</PercentageAlreadyMade>
      <GoalIsCompleted>Não Concluido</GoalIsCompleted>
    </Container>
  );
};
export default CardGoals;
