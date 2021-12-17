import Container from "./style";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth";
import { UserContext } from "../../providers/User";

const MobileFooter = ({ name, isDashboard = false }) => {
  const { setUserModalOpen } = useContext(UserContext);
  const history = useHistory();
  const { handleLogOut } = useContext(AuthContext);
  const onView = (e) => {
    const item = document.querySelector(".active");
    item.classList.remove("active");
    e.currentTarget.classList.add("active");
  };
  return (
    <>
      {isDashboard ? (
        <Container>
          <ul>
            <li
              className={name === "dashboard" ? "active" : "dashboard"}
              onClick={(e) => {
                onView(e);
                history.push("/dashboard");
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <HomeIcon fontSize="large"></HomeIcon>
                </span>
                <span className="text">Home</span>
              </div>
            </li>
            <li
              className={name === "groups" ? "active" : "groups"}
              onClick={(e) => {
                onView(e);
                history.push("/groups");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <GroupsIcon fontSize="large"></GroupsIcon>
                </span>
                <span className="text">Grupos</span>
              </div>
            </li>
            <li
              className={name === "habits" ? "active" : "habits"}
              onClick={(e) => {
                onView(e);
                history.push("/habits");
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <PersonIcon fontSize="large"></PersonIcon>
                </span>
                <span className="text">habitos</span>
              </div>
            </li>
            <li
              onClick={(e) => {
                handleLogOut();
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <LogoutIcon fontSize="large"></LogoutIcon>
                </span>
                <span className="text">LogOut</span>
              </div>
            </li>

            <div className="indicator"></div>
          </ul>
        </Container>
      ) : (
        <Container>
          <ul>
            <li
              className={name === "home" ? "active" : "home"}
              onClick={(e) => {
                onView(e);
                history.push("/");
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <HomeIcon fontSize="large"></HomeIcon>
                </span>
                <span className="text">Home</span>
              </div>
            </li>
            <li
              className={name === "aboutUs" ? "active" : "aboutUs"}
              onClick={(e) => {
                onView(e);
                history.push("/aboutUs");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <HelpIcon fontSize="large"></HelpIcon>
                </span>
                <span className="text">Sobre Nós</span>
              </div>
            </li>
            <li
              className={name === "login" ? "active" : "login"}
              onClick={(e) => {
                history.push("/login");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <LoginIcon fontSize="large"></LoginIcon>
                </span>
                <span className="text">Login</span>
              </div>
            </li>
            <li
              className={name === "singUp" ? "active" : "singUp"}
              onClick={(e) => {
                history.push("/singup");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <PersonAddAlt1Icon fontSize="large"></PersonAddAlt1Icon>
                </span>
                <span className="text">Cadastrar</span>
              </div>
            </li>
            <div className="indicator"></div>
          </ul>
        </Container>
      )}
    </>
  );
};

export default MobileFooter;
