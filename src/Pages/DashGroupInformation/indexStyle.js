import styled from "styled-components";

export const ContainerInfor = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 62px;
    margin-bottom: 32px;
    border-bottom: solid 2px;
    padding-bottom: 22px;

    h1{
        font-size: 1.5rem;
        text-align: center;
    }

    > div{
        margin-top: 26px;
        display: flex;
        justify-content: space-between;
        padding: 0px 12px;
        div{
            width: 200px;
            display: flex;
            flex-direction: column;

            p{
                margin-bottom: 12px;
                font-size: 0.85rem;
            }
        }

        button{
            width: 100px;
            height: 30px;
            background-color: ${(props) => props.member ? "var(--color-tag-level-hard)" : "var(--color-tag-level-easy)"};
        }
    }

    @media screen and (min-width: 768px){
        width: 668px;
        margin: 62px auto;
    }
`

export const ContainerLists = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: scroll;
`