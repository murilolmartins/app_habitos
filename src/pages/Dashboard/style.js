import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: inherit;
    height: 85%;

    /* @media (max-width: 800px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    } */
  }
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 520px;
  height: 100%;
  flex-grow: 1;
  margin-top: 20px;
  background: #ffe2cd;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;

  max-height: 90%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f2a167;
    border-radius: 10px;
    border: none;
  }
  @media (max-width: 800px) {
    height: 35%;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      /* flex: 1; */
      width: 100%;
      text-align: center;
      color: #f2a167;
    }
    button {
      box-sizing: border-box;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
    button {
      box-sizing: border-box;
      width: 72px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      font-family: "Overpass";
      width: 100%;
      height: 40px;
      background: white;
      border: none;
      border-radius: 5px;
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

export const SmallContainerRight = styled(SmallContainer)`
  background-color: rgba(103, 22, 123, 0.4);

  ::-webkit-scrollbar-thumb {
    background-color: #67167b;
  }

  .header h2 {
    color: #67167b;
  }
  .header button {
    background-color: #67167b;
  }
  .search button {
    background-color: #67167b;
  }
`;
