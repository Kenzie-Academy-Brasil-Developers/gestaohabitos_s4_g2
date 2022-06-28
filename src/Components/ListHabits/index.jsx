import { useHabits } from "../../Providers/Habitos";
import CardHabits from "../CardHabits";

const ListHabits = () => {
  const { habits } = useHabits();

  return (
    <div>
      <h2>Meus Habitos</h2>
      <div>
        {habits.length === 0 ? (
          <h2>Não há nenhum habito criado</h2>
        ) : (
          habits.map((habit) => <CardHabits habits={habit} key={habit.id} />)
        )}
      </div>
    </div>
  );
};

export default ListHabits;
