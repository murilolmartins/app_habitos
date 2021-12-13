import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import Container from "./style";

const Habits = () => {
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="habits"></MobileFooter>
    </Container>
  );
};

export default Habits;
