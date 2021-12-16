import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin-bottom: 10px;
  background-color: #f2a167;
  border-radius: 5px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .cardHeader {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 15px 20px;

      h2,
      p {
        margin: 0;
        padding: 0;
      }
      p {
        padding: 3px 15px;
        color: #8a8484;
        background: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 600;
        span {
          color: #eecf5f;
          padding-left: 10px;
        }
      }
    }

    .buttons {
      padding-right: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 60px;
    }
    /* .habitInfo {
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
    } */
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 99%;
    background-color: white;
    border-radius: 5px;
    border: 2px solid #ffa96a;
    .habitInfo {
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
