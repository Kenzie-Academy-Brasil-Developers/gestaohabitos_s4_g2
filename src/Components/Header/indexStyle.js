import styled from "styled-components";

export const HeaderCustomizer = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  box-shadow: 4px 4px 15px var(--bg-color-menu-mobile-light);

  figure {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
