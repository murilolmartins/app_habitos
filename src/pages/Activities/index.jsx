import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import Container from "./style";

const Activities = () => {
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="activities"></MobileFooter>
    </Container>
  );
};

export default Activities;
