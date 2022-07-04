import { useModal } from "../../Providers/ControlModal";
import { useGroup } from "../../Providers/Grupos";
import { useGoals } from "../../Providers/Metas";

import CardGoals from "../CardGoals";
import { Container } from "./indexStyle";

const ListGoals = () => {
  const { member } = useGroup();
  const { goals } = useGoals();
  const { controlModalGoalsAdd } = useModal();
  return (
    <Container>
      <div>
        <h3>Metas</h3>
        {member && (
          <button onClick={controlModalGoalsAdd}>
            <span>+</span>
          </button>
        )}
      </div>

      <div>
        <span>Numero de metas: {goals.length} </span>
      </div>
      <div>
        {goals.map((value) => (
          <CardGoals key={value.id} goals={value} />
        ))}
      </div>
    </Container>
  );
};

export default ListGoals;
