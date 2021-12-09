import styled from "styled-components";

const Container = styled.footer`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  height: 70px;
  background-color: #f2a167;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  @media (min-width: 600px) {
    display: none;
  }
  ul {
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 430px) {
      width: 430px;
    }
    .active .box_icon .icon {
      transform: translateY(-35px);
    }
    .active .box_icon .text {
      opacity: 1;
    }
    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
      :nth-child(1).active ~ .indicator {
        transform: translateX(calc(50px * 0));
        @media (min-width: 430px) {
          transform: translateX(calc(50px * 0));
        }
      }
      :nth-child(2).active ~ .indicator {
        transform: translateX(calc(83px * 1));
        @media (min-width: 430px) {
          transform: translateX(calc(120px * 1));
        }
      }
      :nth-child(3).active ~ .indicator {
        transform: translateX(calc(85px * 2));
        @media (min-width: 430px) {
          transform: translateX(calc(122px * 2));
        }
      }
      :nth-child(4).active ~ .indicator {
        transform: translateX(calc(82px * 3));
        @media (min-width: 430px) {
          transform: translateX(calc(119px * 3));
        }
      }
      .box_icon {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        .icon {
          position: relative;
          display: block;
          line-height: 75px;
          font-size: 1.5em;
          text-align: center;
          transition: 0.5s;
        }
        .text {
          position: absolute;
          color: black;
          font-weight: 0.75em;
          font-size: 14px;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(10px);
        }
      }
    }
    .indicator {
      position: absolute;
      top: -60%;
      width: 70px;
      height: 70px;
      background-color: lightblue;
      border-radius: 50%;
      border: 6px solid white;
      transition: 0.5s;
    }
    .indicator::after {
      content: "";
      position: absolute;
      top: 62%;
      right: -19px;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-top-left-radius: 24px;
      box-shadow: 0px -11px 0px 0px white;
    }
    .indicator::before {
      content: "";
      position: absolute;
      top: 62%;
      left: -19px;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-top-right-radius: 24px;
      box-shadow: 0px -11px 0px 0px white;
    }
  }
`;

export default Container;
