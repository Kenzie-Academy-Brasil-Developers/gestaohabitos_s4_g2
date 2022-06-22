import styled from "styled-components";

export const NavegacaoCustumizada = styled.nav`
    display: ${(props) => props.aberto ? "flex" : "none"};
    transform: ${(props) => props.aberto ? "translateX(0%)" : "translateX(100%)"};
    background-color: var(--bg-cor-menu-mobile-light);
    opacity: ${(props) => props.aberto ? 1 : 0};
    transition: opacity 0.6s;
    position: absolute;
    height: 100vh;
    width: 124px;
    padding: 0px 32px;
    top: 2.5%;
    right: 0%;
    ul{
        margin-top: 62px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 25%;
        li{
            color: var(--cor-primaria-light);
        }
    }
`