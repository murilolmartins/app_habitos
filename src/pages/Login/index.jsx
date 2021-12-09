import MobileFooter from "../../components/MobileFooter";
import { Container, SmallContainer, Content } from "./style";
import ThinkingGirl from "../../assets/images/girl-thinking.png";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <SmallContainer>
        <div className="background_img">
          <img src={ThinkingGirl} alt="" />
        </div>
        <Content>
          <LoginForm></LoginForm>
        </Content>
      </SmallContainer>
      <MobileFooter name="login"></MobileFooter>
    </Container>
  );
};

export default Login;
