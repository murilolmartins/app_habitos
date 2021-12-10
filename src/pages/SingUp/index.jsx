import MobileFooter from "../../components/MobileFooter";
import { Container, SmallContainer, Content } from "./style";
import ThinkingGirl from "../../assets/images/girl-thinking.png";
import RegisterForm from "../../components/RegisterForm";

const SingUp = () => {
  return (
    <Container>
      <SmallContainer>
        <div className="background_img">
          <img src={ThinkingGirl} alt="" />
        </div>
        <Content>
          <RegisterForm></RegisterForm>
        </Content>
      </SmallContainer>
      <MobileFooter name="login"></MobileFooter>
    </Container>
  );
};

export default SingUp;
