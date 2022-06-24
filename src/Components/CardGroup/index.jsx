import {
  CardContent,
  Container,
  GroupMembersContainer,
  LineBox,
} from "./indexStyle";

const CardGroup = () => {
  return (
    <Container>
      <LineBox></LineBox>
      <CardContent>
        <h3>Aprendendo React juntos</h3>
        <h5>descrição:</h5>
        <p>
          Somos um grupo de pessoas que possuem <span>tdah</span> e queremos nos
          unir para estudarmos todos os dias reactjs{" "}
        </p>
        <GroupMembersContainer>
          <h5>Membros</h5>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </GroupMembersContainer>
      </CardContent>
    </Container>
  );
};
export default CardGroup;
