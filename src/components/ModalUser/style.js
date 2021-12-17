import styled from "styled-components";

export const Container = styled.div`
  .userData {
    h2 {
      margin: 0px 0px 20px 0px;
      font-size: 20px;
      text-align: center;
      span{
        margin-left:10px;
        color:#eecf5f;
      }
    }
  }
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    input {
      width: 270px;
      margin: 0px 10px 10px 10px;
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
