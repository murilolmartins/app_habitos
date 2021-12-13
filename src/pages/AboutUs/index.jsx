import Mat from "../../assets/images/staffimgs/Mateus.png";
import Bea from "../../assets/images/staffimgs/Beatriz.png";
import Mic from "../../assets/images/staffimgs/Micael.png";
import Mur from "../../assets/images/staffimgs/Murilo.png";
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
    },
    { name: "Diego Paixao", img: "", job: "PO", link: "" },
    { name: "Murilo Martins", img: `${Mur}`, job: "TL", link: "" },
    { name: "Micael Diniz", img: `${Mic}`, job: "SM", link: "" },
    { name: "Beatriz Silva", img: `${Bea}`, job: "QA", link: "" },
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
