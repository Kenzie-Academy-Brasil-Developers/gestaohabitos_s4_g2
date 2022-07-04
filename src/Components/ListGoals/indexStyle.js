import styled from "styled-components";


export const Container = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction:column;
    align-items: center;

`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LengthGoals = styled.div`
    margin-top: 32px;
    width: 250px;
    span{
        font-size: 0.65rem;
        color: var(--color-span-light);
    }
`

export const Box = styled.div`
    display: flex;

    button{
        margin-left: 92px;
        font-size: 1.2rem;
        font-weight: 800;
        background: transparent;
    }
`