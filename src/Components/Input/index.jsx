import { Container, InputContainer } from "./indexStyle";

const Input = ({ label, icon: Icon, register, name, error, ...rest }) => {
  return (
    <Container>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <input /*{...register(name)}*/ {...rest} />
      </InputContainer>
      {!!error && <span>{error}</span>}
    </Container>
  );
};
export default Input;
