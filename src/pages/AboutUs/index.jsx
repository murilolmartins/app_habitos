import Mat from "../../assets/images/staffimgs/Mateus.png";
import Bea from "../../assets/images/staffimgs/Beatriz.png";
import Mic from "../../assets/images/staffimgs/Micael.png";
import Mur from "../../assets/images/staffimgs/Murilo.png";
import Die from "../../assets/images/staffimgs/Diego.png";
import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import StaffCard from "../../components/StaffCard";
import { Container, Content } from "./style";

const AboutUs = () => {
  const staff = [
    {
      name: "Sobre nós",
      job: "Nós somos uma equipe da Kenzie Academy Brasil, e juntos com foco e muito trabalho construimos coisas incriveis como este app, se você quer saber mais sobre nosso time clique nos cards!",
      img: "",
      link: "https://kenzie.com.br/",
    },
    {
      name: "Diego Paixao",
      img: `${Die}`,
      job: "PO",
      link: "https://www.linkedin.com/in/diego-h-paix%C3%A3o-sousa-249214215/",
    },
    {
      name: "Murilo Martins",
      img: `${Mur}`,
      job: "TL",
      link: "https://www.linkedin.com/in/murilo-louren%C3%A7o-martins-406b051a0/",
    },
    {
      name: "Micael Diniz",
      img: `${Mic}`,
      job: "SM",
      link: "https://www.linkedin.com/in/micael-diniz-4829b9217/",
    },
    {
      name: "Beatriz Silva",
      img: `${Bea}`,
      job: "QA",
      link: "https://www.linkedin.com/in/beatriz-silva-dev/",
    },
    {
      name: "Mateus Viana",
      img: `${Mat}`,
      job: "QA",
      link: "https://www.linkedin.com/in/mateus-de-sousa-837093226/",
    },
  ];
  return (
    <Container>
      <DesktopHeader></DesktopHeader>
      <Content>
        {staff.map((staff, index) => (
          <StaffCard
            key={staff.name}
            name={staff.name}
            img={staff.img}
            job={staff.job}
            link={staff.link}
          />
        ))}
      </Content>
      <MobileFooter name="aboutUs"></MobileFooter>
    </Container>
  );
};
export default AboutUs;
