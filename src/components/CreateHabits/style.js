import styled from "styled-components";

export const InputName = styled.input``;

export const InputDifficulty = styled.input``;

export const ButtonDifficulty = styled.input``;

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;
    svg {
      align-self: center;
      margin-left: 100px;
    }
    h1 {
      text-align: center;
      font-size: 20px;
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
      margin: 0px 10px 40px 10px;
    }
    div {
      color: black;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      label {
        width: 150px;
        text-align: left;
      }
      select {
        padding: 0px 15px;
        width: 130px;
        height: 40px;
        background: #f2a167;
        border-radius: 8px;
        color: white;
      }
    }
    button {
      margin-top: -20px;
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
