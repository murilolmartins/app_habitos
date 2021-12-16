import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/logo-ukifazer.png";
import logout from "./../../assets/images/Logout.png";
import { useContext } from "react";
import { AuthContext } from "./../../providers/Auth/index";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/IndividualsHabits";
const DesktopHeader = ({ isDashBoard = false }) => {
  const { handleLogOut } = useContext(AuthContext);
  const { user, setUserModalOpen } = useContext(UserContext);
  const { getHabits } = useContext(HabitsContext);
  return (
    <>
      {" "}
      {isDashBoard ? (
        <Container>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <Link to="/habits" onClick={getHabits}>
              Hábitos
            </Link>
            <Link to="/groups">Grupos</Link>
            <div className="description">
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              <span onClick={() => setUserModalOpen(true)}>editar</span>
            </div>
            <img onClick={() => handleLogOut()} src={logout} alt="" />
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
          {isDashBoard && (
            <figure>
              <img src={logout} alt="Logo" />
            </figure>
          )}
        </Container>
      )}
    </>
  );
};
export default DesktopHeader;
