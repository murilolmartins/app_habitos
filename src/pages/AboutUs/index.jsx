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
      name: "About Us",
      job: "We are a team from Kenzie Academy, and together with focus and hard work we build amazing thigs, like this app, if you want know more about the team members click in the cards",
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
        {staff.map((staff) => (
          <StaffCard
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
