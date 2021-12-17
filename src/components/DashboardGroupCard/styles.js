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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin-top: 10px;
  background-color: #67167b;
  border-radius: 5px;

  .hidden {
    display: none;
  }

  header {
    width: inherit;
    display: flex;
    justify-content: flex-start;

    h2 {
      padding-left: 30px;
    }
  }

  section {
    width: inherit;
    border: 2px solid #67167b;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    .category {
      font-size: 20px;
      font-weight: 600;

      span {
        color: #67167b;
      }
    }
    .description {
      p {
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: 600;
      }
      span {
        color: #67167b;
        font-size: 18px;
      }
    }

    .goals,
    .activities {
      h4 {
        font-size: 20px;
      }
      .goalList,
      .activitiesList {
        li {
          width: fit-content;
          color: white;
          font-size: 18px;
          background-color: rgba(103, 22, 123, 0.4);
          border-radius: 5px;
          padding: 2px 10px;
          margin: 1px;
        }
      }
    }
  }
`;
