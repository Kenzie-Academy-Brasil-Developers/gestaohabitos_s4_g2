import styled from "styled-components";

export const HeaderCustomizer = styled.header`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 12px 0 12px;

  figure {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 80px;
    }
  }

  div {
    height: 100px;
    width: 60px;
    position: relative;
    z-index: 1;
    svg {
      position: absolute;
      top: 25%;
      left: 50%;
    }
  }
`;
