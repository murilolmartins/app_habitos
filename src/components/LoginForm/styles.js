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
  /* font-family:'Overpass'; */
  display:flex;
  flex-flow:column;
  justify-content:space-between;
  height:260px;
  animation: ${slideToLeft} 2s ease-in-out;
`;
export const Title = styled.h2`
  font-family:'Overpass';
  color:#F2A167;
  font-size: 28px;
  text-align: center;
  
`;
export const Form = styled.form`
  /* font-family:'Overpass'; */
  display:flex;
  flex-flow:column;
  align-items:center;
  justify-content: space-between;
  height:160px;
`;
