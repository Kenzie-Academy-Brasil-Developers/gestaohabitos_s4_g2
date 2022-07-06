import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 62px;
    margin-bottom: 32px;


    h2{
    width: 340px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 16px auto;
    text-align: center;

    @media screen and (min-width: 768px){
         width: 758px;
         text-align: start;
         font-size: 1.5rem;
    }
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
     width: 300px;
     margin: 30px;
     padding: 12px;
     border-radius: 12px;
     box-shadow: 2px 2px 15px var(--bg-color-menu-mobile-light);
  p{
    margin-top: 2px;
    margin-left: 12px;
    
   }

   @media (min-width:768px){
          margin-top: 10px;
          margin-bottom: 10px;
          width: 500px;
          display: flex;
          flex-direction: column;

          p {
               margin-top: 2px;
               margin-left: 12px;

          }
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