import React from "react"
import picsoil from '../Assets/picsoil.jpg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import NearMeIcon from '@mui/icons-material/NearMe';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function Body(props) {


   
    return (


        <div className="cardparentn"> 


        <div> 

        {   props.icon=="1" &&    
        <SpeedIcon sx={{ fontSize: 40 }} color="primary"/>
        }
        {   props.icon=="2" &&    
        <LocalFireDepartmentIcon sx={{ fontSize: 40 }} color="primary"/>
        }
        {   props.icon=="3" &&    
        <AddCardIcon sx={{ fontSize: 40 }} color="primary"/>
        }

        <h1 className="Cardtext1">    

        {props.title}
     
        </h1>

        <p className="paragtextcard">    

        Retrieve the latest soil postings using our reliable technology that provides you with the best return on your investment
     
        </p>


       
        </div>

        
      

        </div>


     
    )
}