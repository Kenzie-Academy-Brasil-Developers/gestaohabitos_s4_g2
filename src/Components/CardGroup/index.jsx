import {
  CardContent,
  Container,
  GroupMembersContainer,
  LineBox,
} from "./indexStyle";

const CardGroup = ({ groups }) => {
  return (
    <Container>
      <LineBox></LineBox>
      <CardContent>
        <h3>{groups.name}</h3>
        <h5>descrição:</h5>
        <p>{groups.description}</p>
        <GroupMembersContainer>
          <h5>Membros</h5>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Categoria: {groups.category} </p>
        </GroupMembersContainer>
      </CardContent>
    </Container>
  );
};
export default CardGroup;
