import { Container } from "./style";

const StaffCard = ({ img, name, job, link }) => {
  return (
    <Container>
      <a href={link} rel="noreferrer" target="_blank">
        <img src={img} alt=""></img>
        <h2>{name}</h2>
        <p>{job}</p>
      </a>
    </Container>
  );
};

export default StaffCard;
