import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  header {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
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
`;
