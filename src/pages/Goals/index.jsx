import { useState } from "react";
import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import ModalGoals from "../../components/ModalGoals";
import Container from "./style";

const Goals = () => {
  
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="goals"></MobileFooter>
      {/* <ModalGoals setIsOpen={setIsModalGoalOpen} isOpen={isModalGoalOpen} /> */}
    </Container>
  );
};

export default Goals;
