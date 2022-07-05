import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Providers/Login";
import api from "../../Services";
import {
  ContainerGroups,
  ContainerPage,
  DivFigure,
  Info,
  InfoPage,
  ListGroups,
} from "./indexStyle";

import imagem from "../../svg/undraw_team_spirit_re_yl1v 1.png";
import CardGroup from "../../Components/CardGroup";

const UserGroups = () => {
  const { token } = useContext(LoginContext);
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroups(response.data);
      });
  }, []);

  console.log(myGroups);
  return (
    <ContainerPage>
      <InfoPage>
        <Info>
          <h1>Deseja fazer parte de algum grupo?</h1>
          <p>
            Se deseja ser membro de um grupo ou criar o seu proprio grupo{" "}
            <Link to="/explorerGroups">Clique Aqui</Link>
          </p>
          <p>Logo abaixo estão todos os grupos em que você criou e é membro</p>
        </Info>
        <DivFigure>
          <img src={imagem} alt="Pessoas em um Grupo" />
        </DivFigure>
      </InfoPage>
      <ContainerGroups>
        <h2>Meus Grupos</h2>
        <ListGroups>
          {myGroups &&
            myGroups.map((group) => {
              return <CardGroup groups={group} />;
            })}
        </ListGroups>
      </ContainerGroups>
    </ContainerPage>
  );
};

export default UserGroups;
