import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/logo-ukifazer.png";
const DesktopHeader = () => {
  return (
    <Container>
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/singUp">Register</Link>
      </div>
    </Container>
  );
};
export default DesktopHeader;
