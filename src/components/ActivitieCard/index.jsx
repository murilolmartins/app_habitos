import { Checkbox } from "@mui/material";
import {Container} from  './styles';
import EditIcon from "@mui/icons-material/Edit";
import {useActivities} from './../../providers/Activities';
import {useGroups} from './../../providers/Groups';
import {useEffect,useState} from 'react'
const ActivitieCard = ({activitie})=>{
  const {id} = activitie;
  const {setCreateActivitiesOpen,setIsNotCreatedActivitie,setActId} =useGroups();
  
 const time = activitie.realization_time.replace(/[T]+/g,' ')
 const timetwo = time.replace(/[-]+/g,'/');
 const timeFinal = timetwo.replace(/[Z]+/g,'H')
 useEffect(()=>{
    
    setActId(id)
  },[id, setActId]);


  return (
    <Container>
        <div>
          <h2>{activitie.title}</h2>
          <p>{timeFinal}</p>
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