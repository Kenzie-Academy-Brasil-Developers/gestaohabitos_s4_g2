import { useGoals } from "../../Providers/Metas";
import { useModal } from "../../Providers/ControlModal";
import {
  Container,
  Difficulty,
  GoalIsCompleted,
  PercentageAlreadyMade,
  Title,
} from "./indexStyle";

const CardGoals = ({ goals }) => {
  const { deleteGoalToGroup } = useGoals();
  const { controlModalGoalEdit } = useModal();
  return (
    <Container>
      <Title>{goals.title}</Title>
      <Difficulty>{goals.difficulty}</Difficulty>
      <PercentageAlreadyMade>{goals.how_much_achieved}</PercentageAlreadyMade>
      <GoalIsCompleted isCompleted={goals.achieved}>
        {goals.achieved ? "Concluido" : "Não concluido"}
      </GoalIsCompleted>

      <button onClick={() => deleteGoalToGroup(goals.id)}>deletar</button>
      <button onClick={() => controlModalGoalEdit(goals.id)}>Editar</button>
    </Container>
  );
};
export default CardGoals;
