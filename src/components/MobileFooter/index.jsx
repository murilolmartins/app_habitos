import Container from "./style";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import GroupsIcon from "@mui/icons-material/Groups";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from "react-router";

const MobileFooter = ({ name, isDashboard = false }) => {
  const history = useHistory();
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
              className={name === "habits" ? "active" : "habits"}
              onClick={(e) => {
                onView(e);
                history.push("/habits");
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <HomeIcon fontSize="large"></HomeIcon>
                </span>
                <span className="text">Habitos</span>
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
              className={name === "goals" ? "active" : "goals"}
              onClick={(e) => {
                history.push("/goals");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <SportsScoreIcon fontSize="large"></SportsScoreIcon>
                </span>
                <span className="text">Objetivos</span>
              </div>
            </li>
            <li
              className={name === "activities" ? "active" : "activities"}
              onClick={(e) => {
                history.push("/activities");
                onView(e);
              }}
            >
              <div className="box_icon">
                <span className="icon">
                  <FormatListNumberedIcon fontSize="large"></FormatListNumberedIcon>
                </span>
                <span className="text">Atividades</span>
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
