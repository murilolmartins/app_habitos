import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";

import { Container, SmallContainer } from "./style";
import { useContext, useState } from "react";
import HabitsCard from "../../components/HabitsCard";
import { HabitsContext } from "../../providers/IndividualsHabits";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";

const Habits = () => {
  const [createHabitsOpen, setCreateHabitsOpen] = useState(false);

  const { habits } = useContext(HabitsContext);

  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <SmallContainer>
        <header>
          <div className="header">
            <h2>Meus Habitos</h2>
            <Button onClick={() => setCreateHabitsOpen(true)}>
              <AddIcon></AddIcon>
            </Button>
          </div>
          <div className="search">
            <input type="text" placeholder="Pesquisar habito" />
            <Button>
              <SearchIcon></SearchIcon>
            </Button>
          </div>
        </header>
        {habits.map((habit) => (
          <HabitsCard habit={habits}></HabitsCard>
        ))}
      </SmallContainer>
      <MobileFooter isDashboard name="habits"></MobileFooter>
      <CreateHabits setIsOpen={setCreateHabitsOpen} isOpen={createHabitsOpen} />
    </Container>
  );
};

export default Habits;
