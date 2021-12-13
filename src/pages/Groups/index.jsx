import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import Container from "./style";

const Groups = () => {
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="groups"></MobileFooter>
    </Container>
  );
};

export default Groups;
