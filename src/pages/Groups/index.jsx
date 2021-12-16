import { useState } from "react";
import DesktopHeader from "../../components/DesktopHeader";
import MobileFooter from "../../components/MobileFooter";
import ModalGroup from "../../components/ModalGroup";
import ModalGoals from "../../components/ModalGoals";
import {Container,SmallContainer} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import ModalUser from './../../components/ModalUser';
import GroupCard from './../../components/GroupsCard/index';
import {useGroups} from './../../providers/Groups/index';
import {useGoals} from './../../providers/Goals/index';
import {useActivities} from './../../providers/Activities';
import CreateActivities from './../../components/CreateActivities/index';
const Groups = () => {
  const [createHabitsOpen, setCreateHabitsOpen] = useState(false);
  const [isModalGroupOpen, setIsModalGroupOpen] = useState(false);
  const {isModalGoalOpen, setIsModalGoalOpen} = useGoals();
  const {userGroupsList} = useGroups();
  const {setCreateActivitiesOpen,createActivitiesOpen,setIsNotCreatedGroup} = useGroups();
  return (
    <Container>
      <DesktopHeader isDashBoard></DesktopHeader>
      <SmallContainer>
        <header>
          <div className="header">
            <h2>Meus grupos</h2>
            <Button onClick={() => {
              setIsNotCreatedGroup(false)
              setIsModalGroupOpen(true)}}>
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
        {userGroupsList.map((group,index)=>{
          
          return (<GroupCard id={group.id}isOpen={setIsModalGroupOpen}key={index}group = {group} index={index}></GroupCard>)})}
      </SmallContainer>
      <MobileFooter isDashboard name="groups"></MobileFooter>
      <ModalGroup
        setIsOpen={setIsModalGroupOpen}
        isOpen={isModalGroupOpen}
      ></ModalGroup>
       <ModalGoals setIsOpen={setIsModalGoalOpen} isOpen={isModalGoalOpen}></ModalGoals>
       <ModalUser setIsOpen={setCreateHabitsOpen} isOpen={createHabitsOpen}/>
       <CreateActivities
        setIsOpen={setCreateActivitiesOpen}
        isOpen={createActivitiesOpen}
      ></CreateActivities>
    </Container>
  );
};

export default Groups;
