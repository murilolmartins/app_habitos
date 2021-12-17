import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  div input {
    font-family: "Overpass";
    width: 280px;
    height: 40px;
    background: #c7eadf;
    border: none;
    border-radius: 12px;
    padding-left: 28px;
    font-size: 16px;
    margin: 10px 0;
    ::placeholder {
      color: #8a8484;
      font-weight: 700;
    }
    :focus {
      outline: 2px solid black;
    }
    @media (min-width: 768px) {
      width: 400px;
    }
  }
`;
