import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/logo-ukifazer.png";
const DesktopHeader = ({ isDashBoard = false }) => {
  return (
    <>
      {" "}
      {isDashBoard ? (
        <Container>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <Link to="/habits">Habitos</Link>
            <Link to="/groups">Grupos</Link>
            <Link to="/goals">Obejtivos</Link>
            <Link to="/activities">Atividades</Link>
          </div>
        </Container>
      ) : (
        <Container>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/singup">Register</Link>
          </div>
        </Container>
      )}
    </>
  );
};
export default DesktopHeader;
