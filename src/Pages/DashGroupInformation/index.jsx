import Button from "../../Components/Button";
// import CardGoals from "../../Components/CardGoals";
//import CardActivities from "../../Components/CardActivities";

const GroupInformation = ({ groups }) => {
  return (
    <section>
      <h1>{groups.name}</h1>
      <div>
        <h5>{groups.description}</h5>
        <h5>{groups.category}</h5>
        <Button>Entrar</Button>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default GroupInformation;
