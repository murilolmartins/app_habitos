import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 300px;
    height: 33px;
    border: 2px transparent orange;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    margin: 3px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    button {
      width: 100px;
    }
  }
`;
