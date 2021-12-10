import Container from "./style";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useHistory } from "react-router";

const MobileFooter = ({ name }) => {
  const history = useHistory();
  const onView = (e) => {
    const item = document.querySelector(".active");
    item.classList.remove("active");
    e.currentTarget.classList.add("active");
  };
  return (
    <Container>
      <ul>
        <li
          className={name === "home" ? "home":"active"}
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
          className={name === "aboutUs" ? "aboutUs":"active"}
          onClick={(e) => {
            onView(e);
            // history.push("/aboutUs");
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
          className={name === "login" ? "login" :"active"}
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
          className={name === "singUp" ? "signUp":"active"}
          onClick={(e) => onView(e)}
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
  );
};

export default MobileFooter;
