import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  header {
    display:flex;
    flex-direction:row;
    align-items: center;
    width:100%;
    justify-content: space-around;
    svg{
      cursor:pointer;
    }
  }
  form p {
    color: red;
    font-size: 15px;
  }
  form Input {
    width:280px;
    padding-left:15px;
    padding-right:15px;
  }
  form{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`;
