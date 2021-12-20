import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1100px;
  flex-grow: 1;
  margin-top: 20px;
  background: rgba(103, 22, 123, 0.4);

  padding: 20px;
  margin-bottom: 63px;
  border-radius: 10px;
  overflow-y: scroll;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      flex: 0.8;
    }
    button {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #67167b;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
    button {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #67167b;
    }
    input {
      font-family: "Overpass";
      width: 280px;
      height: 40px;
      background: white;
      border: none;
      border-radius: 12px;
      padding-left: 28px;
      font-size: 16px;
      margin-right: 10px;
      ::placeholder {
        color: #8a8484;
        font-weight: 700;
      }
      :focus {
        outline: 2px solid black;
      }
      @media (min-width: 768px) {
      }
    }
  }
`;
