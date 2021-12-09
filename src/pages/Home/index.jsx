import Wellcome from "../../components/Wellcome";
import MobileFooter from "../../components/MobileFooter";
import { Container, SmallContainer, Content } from "./style";
import YogaGirl from "../../assets/images/girl-doing-yoga.png";

function Home() {
  return (
    <Container>
      <SmallContainer>
        <div className="background_img">
          <img src={YogaGirl} alt="" />
        </div>
        <Content>
          <Wellcome></Wellcome>
        </Content>
      </SmallContainer>
      <MobileFooter></MobileFooter>
    </Container>
  );
}

export default Home;
