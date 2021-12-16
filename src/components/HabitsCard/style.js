import styled from "styled-components";
import { keyframes } from "styled-components";

export const slideToDown = keyframes`
  from{
    transform:translateY(-10px);
    opacity: 0;
  }
  to{
    transform:translateY(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin-bottom: 10px;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: ${({ checked }) => (checked ? "#8f8f8f" : "#f2a167")};
  
    svg {
      cursor: pointer;
    }
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
    width: 100%;
    background-color: ${({ checked }) => (checked ? "#c9c7c7" : "#f2b990")};
    
    animation: ${slideToDown} 1s;
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
