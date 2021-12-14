import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/logo-ukifazer.png";
import logout from './../../assets/images/Logout.png';
import {useContext} from 'react';
import {AuthContext} from './../../providers/Auth/index';
const DesktopHeader = ({ isDashBoard = false }) => {
  const {handleLogOut} = useContext(AuthContext);
  return (
    <>
      {" "}
      {isDashBoard ? (
        <Container>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <Link to="/habits">Hábitos</Link>
            <Link to="/groups">Grupos</Link>
            <Link to="/goals">Objetivos</Link>
            <Link to="/activities">Atividades</Link>
            <Link to="/profile">Perfil</Link>
            <img onClick = {()=>handleLogOut()} src={logout} alt=""/>
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
          {isDashBoard&&
          <figure>
            <img src={logout} alt="Logo" />
          </figure>}
          
        </Container>
      )}
    </>
  );
};
export default DesktopHeader;
