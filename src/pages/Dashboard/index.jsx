import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";

import { Container, SmallContainer, SmallContainerRight } from "./style";
import { useContext, useEffect, useState } from "react";
import DashboardHabitsCard from "../../components/DashboardHabitsCards";
import { HabitsContext } from "../../providers/IndividualsHabits";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import { useGroups } from "../../providers/Groups";
import DashboardGroupCard from "../../components/DashboardGroupCard";
import ModalGroup from "../../components/ModalGroup";

const Dashboaord = () => {
  //habitos
  const [createHabitsOpen, setCreateHabitsOpen] = useState(false);
  const { habits, getHabits } = useContext(HabitsContext);
  //grupos
  const [isModalGroupOpen, setIsModalGroupOpen] = useState(false);
  const { myGroups, list } = useGroups();
  const { setIsNotCreatedGroup } = useGroups();

  useEffect(() => {
    getHabits();
    myGroups();
  }, []);

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
            {/* <div className="search">
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
            </div> */}
          </header>
          {habits.map((habit, index) => (
            <DashboardHabitsCard
              key={index}
              habit={habit}
            ></DashboardHabitsCard>
          ))}
        </SmallContainer>
        <SmallContainerRight>
          <header>
            <div className="header">
              <h2>Meus grupos</h2>
              <Button
                onClick={() => {
                  setIsNotCreatedGroup(false);
                  setIsModalGroupOpen(true);
                }}
              >
                <AddIcon></AddIcon>
              </Button>
            </div>
            {/* <div className="search">
              <input
                type="text"
                onChange={(e) => {
                  setInputGroup(e.target.value);
                }}
                placeholder="Pesquisar grupo"
              />
              <Button onClick={() => groupsSearch(inputGroup)}>
                <SearchIcon></SearchIcon>
              </Button>
            </div> */}
          </header>
          {list.map((group, index) => {
            return (
              <DashboardGroupCard
                id={group.id}
                isOpen={setIsModalGroupOpen}
                key={index}
                group={group}
                index={index}
              ></DashboardGroupCard>
            );
          })}
        </SmallContainerRight>
      </div>
      <MobileFooter isDashboard name="dashboard"></MobileFooter>
      <CreateHabits setIsOpen={setCreateHabitsOpen} isOpen={createHabitsOpen} />
      <ModalGroup
        setIsOpen={setIsModalGroupOpen}
        isOpen={isModalGroupOpen}
      ></ModalGroup>

      {/* <ModalGoals
        setIsOpen={setIsModalGoalOpen}
        isOpen={isModalGoalOpen}
      ></ModalGoals> */}
    </Container>
  );
};

export default Dashboaord;
