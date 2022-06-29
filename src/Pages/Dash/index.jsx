import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import ListHabits from "../../Components/ListHabits";

import ModalCustomizer from "../../Components/Modal";
import { useModal } from "../../Providers/ControlModal";
import { useHabits } from "../../Providers/Habitos";

const Dashboard = () => {
  const { modalHabitEdit, controlModalHabitEdit } = useModal();
  const { register, handleSubmit } = useForm();
  const { updatedHabitToList, targetHabit } = useHabits();

  return (
    <div>
      <ListHabits />
      <ModalCustomizer
        title="editar habito"
        isOpen={modalHabitEdit}
        fn={controlModalHabitEdit}
      >
        <form
          onSubmit={handleSubmit((callback) =>
            updatedHabitToList(callback, targetHabit.id)
          )}
        >
          <Input
            label="progresso"
            name="how_much_achieved"
            register={register}
            placeholder="Progresso %"
            type="number"
          />

          <div>
            <div>
              <input
                type="radio"
                name="isAchieved"
                value="true"
                {...register("achieved")}
              />
              <label>Concluido</label>
            </div>
            <div>
              <input
                type="radio"
                name="isAchieved"
                value="false"
                {...register("achieved")}
              />
              <label>Não concluido</label>
            </div>
          </div>

          <Button type="submit">Atualizar habito</Button>
        </form>
      </ModalCustomizer>
    </div>
  );
};

export default Dashboard;
