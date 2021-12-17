import Container from "./style";

const DashboardHabitsCard = ({ habit, setModalHabitsOpen }) => {
  return (
    <Container>
      <header
        onClick={(e) => {
          let habitSection = document.querySelector(`.h${habit.id}`);
          habitSection.classList.toggle("hidden");
        }}
      >
        <div className="cardHeader">
          <h2>{habit.title}</h2>
          <p>
            Frequência: <span> {habit.frequency} </span>
          </p>
        </div>
      </header>
      <section className={`descriptionHabit h${habit.id} hidden`}>
        <div className="habitInfo">
          <p>
            Dificuldade: <span>{habit.difficulty}</span>
          </p>
        </div>
        <div className="habitInfo">
          <p>
            Categoria: <span>{habit.category}</span>
          </p>
        </div>
        {/* <div className="buttons">
          <Checkbox color="success" size="large" />
          <span className="deleteIcon">
            <DeleteForeverIcon
              onClick={() => {
                console.log(habit);
                deleteHabits(habit);
              }}
            ></DeleteForeverIcon>
          </span>
        </div> */}
      </section>
    </Container>
  );
};

export default DashboardHabitsCard;
