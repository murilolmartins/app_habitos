import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/logo-ukifazer.png";
const Header = () => {
  return (
    <Container>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Login</Link>
        <Link to="/">Register</Link>
      </div>
    </Container>
  );
};
export default Header;
