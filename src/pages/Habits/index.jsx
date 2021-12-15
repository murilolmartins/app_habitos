import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import ModalHabits from "../../components/ModalHabits";
import ModalGoals from "../../components/ModalGoals";
import { Container, SmallContainer } from "./style";
import { useContext, useState, useEffect } from "react";
import HabitsCard from "../../components/HabitsCard";
import { HabitsContext } from "../../providers/IndividualsHabits";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";

const Habits = () => {
  const [modalHabitsOpen, setModalHabitsOpen] = useState(false);
  const [isModalGoalOpen, setIsModalGoalOpen] = useState(true);

  const { habits, inputText, setInputText, searchHabits, getHabits } =
    useContext(HabitsContext);

  useEffect(() => {
    getHabits();
  }, []);

  console.log(habits);

  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <SmallContainer>
        <header>
          <div className="header">
            <h2>Meus Habitos</h2>
            <Button onClick={() => setModalHabitsOpen(true)}>
              <AddIcon></AddIcon>
            </Button>
          </div>
          <div className="search">
            <input
              type="text"
              onChange={(e) => setInputText(e)}
              placeholder="Pesquisar habito"
            />
            <Button onClick={searchHabits}>
              <SearchIcon></SearchIcon>
            </Button>
          </div>
        </header>
        {habits.map((habit, index) => (
          <HabitsCard key={index} habit={habit}></HabitsCard>
        ))}
      </SmallContainer>
      <MobileFooter isDashboard name="habits"></MobileFooter>
      <ModalHabits setIsOpen={setModalHabitsOpen} isOpen={modalHabitsOpen} />
      <ModalGoals
        setIsOpen={setIsModalGoalOpen}
        isOpen={isModalGoalOpen}
      ></ModalGoals>
    </Container>
  );
};

export default Habits;
