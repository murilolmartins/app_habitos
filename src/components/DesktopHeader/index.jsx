import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img />
      <div>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </Container>
  );
};
export default Header;
