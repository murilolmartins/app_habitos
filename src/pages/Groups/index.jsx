import { useState } from "react";
import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import ModalGroup from "../../components/ModalGroup";
import ModalUser from "../../components/ModalUser";
import Container from "./style";

const Groups = () => {
  const [isModalGroupOpen, setisModalGroupOpen] = useState(true);
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <MobileFooter isDashboard name="groups"></MobileFooter>
      <ModalGroup
        setIsOpen={setisModalGroupOpen}
        isOpen={isModalGroupOpen}
      ></ModalGroup>
    </Container>
  );
};

export default Groups;
