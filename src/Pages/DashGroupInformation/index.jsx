import { useForm } from "react-hook-form";
import Button from "../../Components/Button";
import HandleGoal from "../../Components/HandleGoal";
import Input from "../../Components/Input";
import ListGoals from "../../Components/ListGoals";

import ModalCustomizer from "../../Components/Modal";
import { useModal } from "../../Providers/ControlModal";

import { useGroup } from "../../Providers/Grupos";
import { useGoals } from "../../Providers/Metas";
import { ContainerInfor, ContainerLists } from "./indexStyle";

const GroupInformation = () => {
  const { member, targetGroup, getInOnGroup, getOutOnGroup } = useGroup();
  const { createGoalToGroup } = useGoals();
  const { modalGoalsAdd, controlModalGoalsAdd } = useModal();

  const { register, handleSubmit } = useForm();
  return (
    <>
      <HandleGoal />
      <ContainerInfor member={member}>
        <h1>{targetGroup.name}</h1>
        <div>
          <div>
            <p>
              <strong>Descrição:</strong> {targetGroup.description}
            </p>
            <p>
              <strong>Categoria:</strong> {targetGroup.category}
            </p>
          </div>
          <Button
            onClick={() => {
              member ? getOutOnGroup() : getInOnGroup();
            }}
          >
            {member ? "Sair" : "Entrar"}
          </Button>
        </div>
      </ContainerInfor>
      <ContainerLists>
        <ListGoals />
      </ContainerLists>
      
      <ModalCustomizer
        isOpen={modalGoalsAdd}
        title="Adicionar uma meta"
        fn={controlModalGoalsAdd}
      >
        <form
          onSubmit={handleSubmit((callback) =>
            createGoalToGroup(callback, targetGroup.id)
          )}
        >
          <Input
            register={register}
            name="title"
            placeholder="nome da meta"
            type="text"
          />
          <select {...register("difficulty")}>
            <option value="Fácil">Fácil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
          </select>
          <Button type="submit">Adicionar Meta</Button>
        </form>
      </ModalCustomizer>
    </>
  );
};

export default GroupInformation;
