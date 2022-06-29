import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;


    h2{
    width: 65%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 42px;
    margin: 10px;
   }
`

export const Container = styled.div`
@media (max-width:800px){
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   
  }
  display: flex;
  
`;

export const Square = styled.div`
 width: 44px;
  height: 44px;
  background: ${(props) => props.color};
`;

export const Circle = styled.div`
    width: 65px;
    height: 65px;
    background: #E4E3E3;
    border-radius: 50%;
`;

export const SubContainer = styled.div`
@media (max-width:800px){
 margin-top: 10px;
 margin-bottom: 10px;
  width: 80%;
   display: flex;
   flex-direction: column;

   p{
    margin-top: 2px;
    margin-left: 12px;

   }
  }
  width: 70%;
  margin: 30px;
  p{
    margin-top: 2px;
    margin-left: 12px;
    
   }
  
  
`;

export const HeadContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
`

export const Line = styled.div`
     @media (max-width:800px){
      width: ${(props) => props.width};
     background-color: ${(props) => props.color};
     border: 2px solid ${(props) => props.color};
    
     }
     width: ${(props) => props.width};
     background-color: ${(props) => props.color};
     border: 2px solid ${(props) => props.color};

    
`;
export const SubHeadContainer = styled.div`
     display: flex;
     align-items: center;

     p{
      margin-left: 12px;
      
     }
`;

export const StatusActivity = styled.div`
   display: flex;
   margin-top: ${(props) => props.margin};
   flex-direction: column;
   align-items: flex-end;
`