import MobileFooter from "../../components/MobileFooter";
import { Container, SmallContainer, Content } from "./style";
import Man from "../../assets/images/man.png";
import RegisterForm from "../../components/RegisterForm";
import DesktopHeader from "../../components/DesktopHeader";

const SingUp = () => {
  return (
    <Container>
      <DesktopHeader></DesktopHeader>
      <SmallContainer>
        <div className="background_img">
          <img src={Man} alt="" />
        </div>
        <Content>
          <RegisterForm></RegisterForm>
        </Content>
      </SmallContainer>
      <MobileFooter name="singUp"></MobileFooter>
    </Container>
  );
};

export default SingUp;
