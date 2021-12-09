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
export const Input = styled.input`
  font-family:'Overpass';
  width:280px;
  height:40px;
  background: #c7eadf;
  border:none;
  border-radius: 12px;
  padding-left:28px;
  font-size:16px;
  ::placeholder{
    color: #8A8484;
    font-weight:700;
  }
  :focus{
    outline:2px solid black;
  }
  @media (min-width:768px){
    width:400px;
  }
`;
export const Button = styled.button`
  font-family:'Overpass';
  width:180px;
  height:40px;
  font-size:20px;
  background: #F2A167;
  border-radius:10px;
  border:none;
  cursor:pointer;
  color: #FFFDFD;
  :hover{
    filter:brightness(0.7);
  }
`;