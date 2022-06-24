import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 26px auto;
    padding: 0px 16px;
    div{
        margin-bottom: 20px;
        
        h2{
            font-size: 1.2rem;
            font-weight: 600;

        }

        p{
            margin: 12px 0px;
            font-weight: 200;
            font-size: 0.75rem;
            line-height: 1.1rem;
            width: 300px;
        }

        img{
            margin-top: 12px;
            width: 200px;
        }

    }
`