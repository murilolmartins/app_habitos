import styled,{keyframes} from 'styled-components';

export const slideToLeft = keyframes`
  from{
    transform:translateX(100px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;
export const Container = styled.div`

  display:flex;
  flex-flow:column;
  justify-content:space-between;
  height:260px;
  animation: ${slideToLeft} 1s ease-in-out;
`;
export const Title = styled.h2`
  font-family:'Overpass';
  color:#F2A167;
  font-size: 28px;
  text-align: center;
  
`;
export const Form = styled.form`
 
  position:relative;
  display:flex;
  flex-flow:column;
  align-items:center;
  justify-content: space-between;
  height:160px;
`;
export const Errors = styled.span`
  color:#f95959;
 
  position:absolute;
  top:${props=>props.password?'50px':'-10px'};
  @media (min-width:768px){
    align-self:flex-start;
  }
`;