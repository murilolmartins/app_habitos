import styled from "styled-components";

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
    }
  }
  div{
    
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
      /* margin-bottom: 10px; */
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
      margin-top: 30px;
      margin-left:4px;
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
export const ButtonsUpdate = styled.div`
margin-top:10px;
  display:flex;
  justify-content: space-between;
`;
