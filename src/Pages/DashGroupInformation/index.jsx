import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { useGroup } from "../../Providers/Grupos";
import { LoginContext } from "../../Providers/Login";
import api from "../../Services";
// import CardGoals from "../../Components/CardGoals";
//import CardActivities from "../../Components/CardActivities";

const GroupInformation = () => {
  // const { userId, token } = useContext(LoginContext);
  const params = useParams();
  const [groups, setGroups] = useState([]);
  // const myGroup = JSON.parse(localStorage.getItem("@group/token"));
  console.log(groups);
  // const [member, setMember] = useState(false);
  const { member } = useGroup();
  useEffect(() => {
    api
      .get(`groups/${params.id}/`)
      .then((resp) => {
        localStorage.setItem("@group/token", JSON.stringify(resp.data));
        setGroups(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const isRegistered = groups.find((user) => {
  //   if (user.users_on_group.id === userId) {
  //     setMember(true);
  //   }
  //   setMember(false);
  // });

  return (
    <>
      {member ? (
        <section>
          <h1>{groups.name}</h1>
          <div>
            <h5>{groups.description}</h5>
            <h5>{groups.category}</h5>
            <Button>Sair do grupo</Button>
          </div>
          <div></div>
          <div></div>
        </section>
      ) : (
        <section>
          <h1>{groups.name}</h1>
          <div>
            <h5>{groups.description}</h5>
            <h5>{groups.category}</h5>
            <Button>Entrar no grupo</Button>
          </div>
          <div>groups.goals &&</div>
          <div></div>
        </section>
      )}
    </>
  );
};

export default GroupInformation;
