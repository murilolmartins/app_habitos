import Wellcome from "../../components/Wellcome";
import MobileFooter from "../../components/MobileFooter";
import { Container, SmallContainer, Content } from "./style";
import YogaGirl from "../../assets/images/girl-doing-yoga.png";
import DesktopHeader from "../../components/DesktopHeader";

function Home() {
  return (
    <Container>
      <DesktopHeader></DesktopHeader>
      <SmallContainer>
        <div className="background_img">
          <img src={YogaGirl} alt="" />
        </div>
        <Content>
          <Wellcome></Wellcome>
        </Content>
      </SmallContainer>
      <MobileFooter name="home"></MobileFooter>
    </Container>
  );
}

export default Home;
