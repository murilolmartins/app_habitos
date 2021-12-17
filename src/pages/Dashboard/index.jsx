import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import CreateHabits from "../../components/CreateHabits";

import { Container, SmallContainer, SmallContainerRight } from "./style";
import { useContext, useEffect, useState } from "react";
import DashboardHabitsCard from "../../components/DashboardHabitsCards";
import { HabitsContext } from "../../providers/IndividualsHabits";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import { useGoals } from "../../providers/Goals";
import { useGroups } from "../../providers/Groups";
import DashboardGroupCard from "../../components/DashboardGroupCard";
import ModalGroup from "../../components/ModalGroup";

const Dashboaord = () => {
  //habitos
  const [createHabitsOpen, setCreateHabitsOpen] = useState(false);
  const { habits, inputText, setInputText, habitsSearch, getHabits } =
    useContext(HabitsContext);
  //grupos
  const [isModalGroupOpen, setIsModalGroupOpen] = useState(false);
  const { isModalGoalOpen, setIsModalGoalOpen } = useGoals();
  const { myGroups, userGroupsList } = useGroups();
  const {
    setCreateActivitiesOpen,
    createActivitiesOpen,
    setIsNotCreatedGroup,
  } = useGroups();

  useEffect(() => {
    getHabits();
    myGroups();
  }, []);

  const pesquisa = (data, input) => {};

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
            <div className="search">
              <input type="text" placeholder="Pesquisar grupo" />
              <Button>
                <SearchIcon></SearchIcon>
              </Button>
            </div>
          </header>
          {userGroupsList.map((group, index) => {
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
      <MobileFooter isDashboard name="habits"></MobileFooter>
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
