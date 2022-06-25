
import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
 
  h1{
    text-align: center;
  }
`;
export const Box = styled.div`
  @media (max-width:740px){
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    

  }
  width: 100%;
  display: flex;
  justify-content: center;

`;

export const CardSecundary = styled.div`
   @media (max-width:740px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    
   }

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

`;
export const CardThird = styled.div`
 @media (max-width: 740px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
 }
`

export const Container = styled.div`
 margin-top: 25px;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color: var(--color-text-light) ;
 background-color: var(--color-primary-light);
 
 h1{
    text-align: center;
 }

 h3{
  text-align: center;
 }
 h4{
  text-align: center;
  margin: 10px;
 }
 p{
  text-align: justify;
 }
 
`;

export const Picture = styled.img`
  background-color: green;
  width: 90px;
  height: 90px;
  background-size: cover;
  display: block;
  border-radius: 50%;
  
  align-items: center;
  margin: 10px;
`;
export const Card = styled.div`
   width: 80%;
   background-color: #ECECEC;
`;

export const CircleBlue = styled.div`
  background-color: #1361F9;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  margin: 10px;
`;


export const CircleBlack = styled.div`
  background-color: #24292F;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  margin: 10px;
`;


export const CirclePink = styled.div`
  background-color: #E54B73;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  margin: 10px;
`;

export const ContainerCircles = styled.div`
   display: flex;
   width: 80%;
   justify-content: flex-end ;
`;
