import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import Container from "./style";

const Goals = () => {
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="goals"></MobileFooter>
    </Container>
  );
};

export default Goals;
