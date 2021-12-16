import { Checkbox } from "@mui/material";
import {Container} from  './styles';
import EditIcon from "@mui/icons-material/Edit";
import {useActivities} from './../../providers/Activities';
import {useGroups} from './../../providers/Groups';
import {useEffect,useState} from 'react'
const ActivitieCard = ({activitie})=>{
  const {id} = activitie;
  const {setCreateActivitiesOpen,setIsNotCreatedActivitie,setActId} =useGroups();
 

  useEffect(()=>{
    setActId(id)
  },[id, setActId]);


  return (
    <Container>
        <div>
          <h2>{activitie.title}</h2>
          <p>{activitie.realization_time}</p>
        </div>
        <div>
        <EditIcon onClick={()=>{
          setActId(id);
          setIsNotCreatedActivitie(true);
          setCreateActivitiesOpen(true);
          }}></EditIcon>
        </div>
    </Container>
  )
};
export default ActivitieCard;