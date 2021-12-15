import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #f2a167;
    border-radius: 5px;
    div {
      color: #8a8484;
      background: white;
      width: 30%;
      font-size: 13px;
      border-radius: 10px;
      height: 70%;
      display: flex;
      align-items: center;
      @media (min-width: 450px) {
        font-size: 20px;
      }
      p {
        padding-left: 10px;
        span {
          color: 686269;
        }
      }
    }
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 99%;
    background-color: #ffa96a;
    border-radius: 5px;
    div {
      color: #8a8484;
      background: white;
      width: 30%;
      font-size: 10px;
      border-radius: 10px;
      height: 70%;
      display: flex;
      align-items: center;
      @media (min-width: 450px) {
        font-size: 20px;
      }
      p {
        padding-left: 10px;
        span {
          color: #eecf5f;
        }
      }
    }
  }
  .hidden {
    display: none;
  }
`;

export default Container;
