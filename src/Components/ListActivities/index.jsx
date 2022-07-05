import { useModal } from "../../Providers/ControlModal";
import { useGroup } from "../../Providers/Grupos";
import { useActivities } from "../../Providers/Atividades";
import CardActivities from "../CardActivities";

const ListActivities = () => {
  const { member } = useGroup();
  const { controlModalActivitiesAdd } = useModal();
  const { activities } = useActivities();
  return (
    <>
      <div>
        <h3>Atividades</h3>
        {member && (
          <button onClick={controlModalActivitiesAdd}>
            <span>+</span>
          </button>
        )}
      </div>
      <div>
        <span>Numero de atividades: {activities.length} </span>
      </div>
      <div>
        {activities.map((value) => (
          <CardActivities key={value.id} activities={value} />
        ))}
      </div>
    </>
  );
};
export default ListActivities;
