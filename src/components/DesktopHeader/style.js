import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-evenly;
    a {
      margin: 50px;
      margin-right: 70px;
      text-decoration: none;
      color: #f2a167;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
`;
