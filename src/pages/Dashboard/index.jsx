import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";

import { Container, SmallContainer, SmallContainerRight } from "./style";
import { useContext, useState } from "react";
import HabitsCard from "../../components/HabitsCard";
import { HabitsContext } from "../../providers/IndividualsHabits";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";

const Dashboaord = () => {
  // const [createHabitsOpen, setCreateHabitsOpen] = useState(true);
  const [isModalGoalOpen, setIsModalGoalOpen] = useState(true);

  const [createHabitsOpen, setCreateHabitsOpen] = useState(false);
  const { getHabits } = useContext(HabitsContext);

  const userHabits = getHabits();
  console.log(userHabits);
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <div className="content">
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
          {JSON.parse(localStorage.getItem("@AppHabits:UserHabits")).map(
            (habit) => (
              <HabitsCard habit={habit}></HabitsCard>
            )
          )}
        </SmallContainer>
        <SmallContainerRight>
          <header>
            <div className="header">
              <h2>Meus Grupos</h2>
              <Button onClick={() => setCreateHabitsOpen(true)}>
                <AddIcon></AddIcon>
              </Button>
            </div>
            <div className="search">
              <input type="text" placeholder="Pesquisar grupo" />
              <Button>
                <SearchIcon></SearchIcon>
              </Button>
            </div>
          </header>
        </SmallContainerRight>
      </div>
      <MobileFooter isDashboard name="habits"></MobileFooter>
      <CreateHabits setIsOpen={setCreateHabitsOpen} isOpen={createHabitsOpen} />

      {/* <ModalGoals
        setIsOpen={setIsModalGoalOpen}
        isOpen={isModalGoalOpen}
      ></ModalGoals> */}
    </Container>
  );
};

export default Dashboaord;
