import styled, { keyframes } from "styled-components";
export const slideToLeft = keyframes`
  from{
    transform:translateX(100px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 5px;
  animation: ${slideToLeft} 1s ease-in-out;

  @media (min-width: 400px) {
    padding: 0px 10px;
  }
  h1 {
    margin: 0px;
    color: #534f54;
    font-size: 45px;
    @media (min-width: 400px) {
      font-size: 50px;
    }
  }
  p {
    color: #8a8484;
    font-size: 15px;
    width: 100%;
    min-width: 320px;
    max-width: 500px;
    @media (min-width: 400px) {
      font-size: 20px;
    }
  }
`;

export default Container;
