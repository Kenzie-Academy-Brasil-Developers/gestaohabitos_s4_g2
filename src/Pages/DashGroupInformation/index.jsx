import Button from "../../Components/Button";
import { useGroup } from "../../Providers/Grupos";

const GroupInformation = () => {
  const { member, targetGroup, getInOnGroup, getOutOnGroup } = useGroup();
  return (
    <>
      <section>
        <h1>{targetGroup.name}</h1>
        <div>
          <h5>{targetGroup.description}</h5>
          <h5>{targetGroup.category}</h5>
          <Button
            onClick={() => {
              member ? getOutOnGroup() : getInOnGroup();
            }}
          >
            {member ? "Sair" : "Entrar"}
          </Button>
        </div>
      </section>
    </>
  );
};

export default GroupInformation;
