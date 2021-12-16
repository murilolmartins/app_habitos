import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;
    svg {
      align-self: center;
      margin-left: 100px;
      cursor:pointer;
    }

    h1 {
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    input {
      width: 270px;
      margin: 0px 10px 20px 10px;
    }
    button {
      margin-top: 10px;
    }
  }
`;

export const Errors = styled.span`
  color: #f95959;
  margin-left: 10px;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;
