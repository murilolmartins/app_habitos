import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid lightblue;
  border-radius: 15px;
  box-shadow: 0px -13px 27px 9px lightblue;
  div {
    display: none;
    @media (min-width: 760px) {
      display: flex;
      justify-content: space-evenly;
    }
    a {
      margin: 50px;
      text-decoration: none;
      color: #f2a167;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 1152px) {
    div a {
      margin-left: 25px;
      margin-right: 25px;
    }
  }
  @media screen and (max-width: 975px) {
    div a {
      margin-left: 10px;
      margin-right: 10px;
    }
    justify-content: center;
  }

  @media screen and (max-width: 420px) {
    figure img {
      width: 250px;
    }
  }
`;
