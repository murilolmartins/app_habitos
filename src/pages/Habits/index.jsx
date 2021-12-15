import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";
import ModalGoals from "./../../components/ModalGoals/index";
import Container from "./style";
import { useState } from "react";
import CreateActivities from "../../components/CreateActivities";

const Habits = () => {
  const [createHabitsOpen, setCreateHabitsOpen] = useState(true);
  const [isModalGoalOpen, setIsModalGoalOpen] = useState(true);
  const [createActivitiesOpen, setCreateActivitiesOpen] = useState(true);
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="habits"></MobileFooter>
      {/* <CreateHabits setIsOpen={setCreateHabitsOpen} isOpen={createHabitsOpen} />
      <ModalGoals
        setIsOpen={setIsModalGoalOpen}
        isOpen={isModalGoalOpen}
      ></ModalGoals> */}
      <CreateActivities
        setIsOpen={setCreateActivitiesOpen}
        isOpen={createActivitiesOpen}
      ></CreateActivities>
    </Container>
  );
};

export default Habits;
