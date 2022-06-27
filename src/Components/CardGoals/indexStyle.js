import styled from "styled-components";

export const Container = styled.section`
  width: 70%;
  max-width: 400px;
  margin: auto;
  padding: 15px;
  gap: 15px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "Titulo Difficulty "
    " GoalIsCompleted PercentageAlreadyMade";
`;
export const Titulo = styled.h3`
  grid-area: Titulo;
  grid-column: 1;
  color: var(--color-title-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Difficulty = styled.span`
  grid-area: Difficulty;
  grid-column: 2/4;
  justify-self: flex-end;
  padding: 5px;
  color: var(--color-primary-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-tag-level-easy);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 20px;
`;
export const PercentageAlreadyMade = styled.span`
  grid-area: PercentageAlreadyMade;
  grid-column: 1;
  align-self: flex-end;
`;

export const GoalIsCompleted = styled.div`
  grid-area: GoalIsCompleted;
  grid-column: 2/4;
  justify-self: flex-end;
  border-radius: 10px;
  padding: 5px;
  color: var(--color-primary-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-tag-level-easy);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 20px;
`;
