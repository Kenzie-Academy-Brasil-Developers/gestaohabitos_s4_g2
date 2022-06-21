import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video ,button{
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;

        font-family:'Roboto', sans-serif;;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section,main {
        display: block;
    }
    ol, ul {
        list-style: none;
    }

    button{
        cursor: pointer;
    }


    :root{
        --cor-primaria-light: #F9F9F9;
        --cor-secundaria-light: #F2F2F2;
        --cor-span-light: #494444; 
        --cor-texto-light: #202020;
        --titulo-cor-light: #23242B;
        --bg-cor-menu-mobile-light: #23242B;

        --bg-button: #5A5BD5;
        --cor-etiqueta-nivel-facil: #71CB75;
        --cor-etiqueta-nivel-medio: #FACB32;
        --cor-etiqueta-nivel-dificil: #E54B73;

        --cor-button-entrar-grupo: #E54B73;
        --cor-button-sair-grupo: #71CB75;
    }

`

export default GlobalStyle