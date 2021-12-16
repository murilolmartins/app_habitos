import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";
import { UserContext } from "./../../providers/User";
import { Container, SmallContainer } from "./style";
import { useContext, useState, useEffect } from "react";
import HabitsCard from "../../components/HabitsCard";
import { HabitsContext } from "../../providers/IndividualsHabits";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import ModalUser from "../../components/ModalUser";

const Habits = () => {
  const [modalHabitsOpen, setModalHabitsOpen] = useState(false);

  const { habits, inputText, setInputText, habitsSearch, getHabits } =
    useContext(HabitsContext);
  const { user, setUserModalOpen } = useContext(UserContext);
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
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              placeholder="Pesquisar habito"
            />
            <Button onClick={() => habitsSearch(inputText)}>
              <SearchIcon></SearchIcon>
            </Button>
          </div>
        </header>
        {habits.map((habit, index) => (
          <HabitsCard
            key={index}
            habit={habit}
            setModalHabitsOpen={setModalHabitsOpen}
          ></HabitsCard>
        ))}
      </SmallContainer>
      <MobileFooter isDashboard name="habits"></MobileFooter>

      <ModalUser setIsOpen={setUserModalOpen} isOpen={user} />
      <CreateHabits setIsOpen={setModalHabitsOpen} isOpen={modalHabitsOpen} />
    </Container>
  );
};

export default Habits;
