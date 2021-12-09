import Container from "./style";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const MobileFooter = () => {
  const onView = (e) => {
    const item = document.querySelector(".active");
    item.classList.remove("active");
    e.currentTarget.classList.add("active");
  };
  return (
    <Container>
      <ul>
        <li className="active" onClick={(e) => onView(e)}>
          <div className="box_icon">
            <span className="icon">
              <HomeIcon fontSize="large"></HomeIcon>
            </span>
            <span className="text">Home</span>
          </div>
        </li>
        <li onClick={(e) => onView(e)}>
          <div className="box_icon">
            <span className="icon">
              <HelpIcon fontSize="large"></HelpIcon>
            </span>
            <span className="text">Sobre Nós</span>
          </div>
        </li>
        <li onClick={(e) => onView(e)}>
          <div className="box_icon">
            <span className="icon">
              <LoginIcon fontSize="large"></LoginIcon>
            </span>
            <span className="text">Login</span>
          </div>
        </li>
        <li onClick={(e) => onView(e)}>
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
