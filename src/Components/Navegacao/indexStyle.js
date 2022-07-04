import styled from "styled-components";

export const NavegationCustumizer = styled.nav`
    display: ${(props) => props.open ? "flex" : "none"};
    transform: ${(props) => props.open ? "translateX(0%)" : "translateX(100%)"};
    background-color: var(--bg-color-menu-mobile-light);
    opacity: ${(props) => props.open ? 1 : 0};
    transition: opacity 0.6s;
    position: absolute;
    height: 100vh;
    width: 124px;
    padding: 0px 32px;
    top: 0.5%;
    right: 0%;




    ul{
        margin-top: 62px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 25%;
        li a{
            color: var(--color-primary-light);
            text-decoration: none;
        }
    }

    @media screen and (min-width: 768px){
        display: block;
        transform: translateX(0%);
        opacity: 1;
        height: 70px;
        width: 500px;
        background: transparent;

        ul{
            height: 100%;
            margin-top: 0px;
            flex-direction: row;
            align-items: center;
            li{
                cursor: pointer;
            }
            li a{
                color: var(--color-text-light);
                font-weight: 600;
                text-decoration: none;
            }
        }
    }
`