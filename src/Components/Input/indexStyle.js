import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  span {
    text-align: left;
    font-size: 0.7rem;
    margin-left: 8px;
    color: rgba(255, 2, 2, 0.8);
  }
  @media (min-width: 500px) {
    span {
      font-size: 0.9rem;
    }
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid var(--color-text-light);
  background-color: var(--color-primary-light);

  input {
    background-color: transparent;
    border: 0;
    flex: 1;
    font-size: 0.8rem;
    align-items: center;
    color: var(--color-text-light);
    &::placeholder {
      color: rgba(32, 32, 32, 0.8);
    }
    @media (min-width: 500px) {
      font-size: 1rem;
    }
  }
  svg {
    margin-right: 10px;
  }
`;