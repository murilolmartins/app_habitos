import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
export const slideToDown = keyframes`
  from{
    transform:translateY(-10px);
    opacity: 0;
  }
  to{
    transform:translateY(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin-top: 10px;
  header {
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #67167b;
    border-radius: 5px;
    margin-bottom:10px;
    :hover{
      cursor:pointer;
      outline:2px solid white;
    }
   @media(max-width:768px) {
     font-size:0.7rem;
   }
    svg{
      cursor:pointer;
      border-radius:5px;
      padding:4px;
     :hover{ background-color: purple;}
    }
    h2{
      width:200px;
      text-align:center;
    }
    div {
      display:flex;
      padding:0 20px;
      background: white;
      width: 30%;
      font-size: 20px;
      border-radius: 10px;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content:center;
      p {
        
        span {
          text-align:center;
          color: black;
          @media(max-width:768px) {
          font-size:1rem;
          }    
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 220px;
    width: 99%;
    background-color: rgba(103, 22, 123, 0.4);
    border-radius: 5px;
    margin-top:-10px;
    animation: ${slideToDown} 1s;
    @media(max-width:768px){
      height:auto;
    }
    svg{
     cursor:pointer;
   
    }
    
  }
  .hidden {
    display: none;
  }
`;

export const Cards = styled.div`
overflow-y: ${props=>props.isHidden?css`hidden`:css`scroll`};
width:100%;
height:120px;
::-webkit-scrollbar {
  width: 16px;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: #67167B;
  border-radius:10px;
  border:none; 
}
@media(max-width:768px){
  height:${props=>props.mobile?'80px':'120px'}
 
}
` 
export const ContainerInfo = styled.div`
   
      color: white;
      background: #461e46;
      font-size: 20px;
      border-radius: 10px;
      width:100%;
      height: auto;
      display: flex;
      box-sizing:border-box;
      padding:20px;
      justify-content: space-around;
      align-items: center;
      @media(max-width:668px){
      flex-direction:column;
    }
      label{
        padding-left:20px;
      }
      select {
        padding: 0px 15px;
        width: 130px;
        height: 36px;
        margin-top:4px;
        margin-left:10px;
        background: #67167B;
        border-radius: 8px;
        color: white;
        font-size:16px;
        border:none;
      }
      p {
        width:100%;
        text-align:center;
        span {
          color: #eecf5f;
        }
      }
    
`
export const Button = styled.button`
  width:150px;
  height:36px;
  border-radius:8px;
  font-size:16px;
  border:none;
  align-items: center;
  justify-content: center;
  display:flex ;
  color:white;
  background:#67167B;
  margin-left:4px;
  cursor:pointer;
  :hover{filter:brightness(0.7);}
`;
export const Add1 = styled.div`
margin-top:10px;
display:flex;
align-items:center;
height:25px;
padding:4px;
justify-content:center;
h3{
  font-size:18px;
}
`
export const ContainerCards = styled.div`
display:flex;
justify-content:space-around;
width:100%;
align-items:center;
@media(max-width:768px){
  flex-direction:column;
  align-items: center;
  font-size:14px;
}
`
export const DivSelect = styled.div`
  display:flex;
  align-items:center;
  label{
    @media(max-width:768px){
      font-size:16px;
    }
  }
  select{
    @media(max-width:768px){
      font-size:16px;
    }
  }
  
  `;
export const DivCateg = styled.div`

  p{
    @media(max-width:768px){

      font-size:16px;
    }
  }
`
export const SairGrupo = styled.div`
  span{
    font-size:18px;
    @media(max-width:768px){

      font-size:16px;
    }
  }
  display:flex;
  align-items: center;
  svg{
    margin:4px;
    color:red;
    :hover{
      color:purple;
    }
  }
`
