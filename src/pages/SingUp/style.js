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
  align-items: center;
  width: 100%;
  flex-grow: 1;
  max-width: 1200px;
  .background_img {
    display: none;
    width: 50%;
    @media (min-width: 1100px) {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 650px;
        padding-left: 50px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 1100px) {
    width: 50%;
  }
`;
