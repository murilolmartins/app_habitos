import styled from 'styled-components';
export const Container = styled.div`
  /* width:290px; */
  height:82px;
  background:white;
  color:black;
  border-radius:10px;
  padding:10px;
  display:flex;
  justify-content:space-around;
  align-items: center;
  margin:10px 10px;
  background-color:${props=>props.achieved===true?'#6e477a':'#67167B'};
  color:white;
  div{
    p{
      color:#eecf5f;
    }
    svg{
      cursor:pointer;
      border-radius:5px;
      padding:4px;
     :hover{ background-color: purple;}
    }
  }
`;
