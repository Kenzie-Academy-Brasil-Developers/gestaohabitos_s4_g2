import {
  Container,
  Difficulty,
  GoalIsCompleted,
  PercentageAlreadyMade,
  Title,
} from "./indexStyle";

const CardGoals = ({ goals }) => {
  return (
    <Container>
      <Title>{goals.title}</Title>
      <Difficulty>{goals.difficulty}</Difficulty>
      <PercentageAlreadyMade>{goals.how_much_achieved}</PercentageAlreadyMade>
      <GoalIsCompleted>{goals.achieved}</GoalIsCompleted>
    </Container>
  );
};
export default CardGoals;
