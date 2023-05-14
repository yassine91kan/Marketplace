import React from "react";
import picsoil from '../Assets/picsoil.jpg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import BasicTable from './Table.js';



export default function Listings() {


   
    return (


        <div className="bodytextparentn"> 

         <div className="bodytextn">


            <div className="listingtxt">
             Discover Latest Listings

             <div>
             <ArrowCircleLeftRoundedIcon sx={{ fontSize: 45 }}/>
             <ArrowCircleRightRoundedIcon sx={{ fontSize: 45 }}/>
             </div>

             </div> 

             <div className="table">

             <BasicTable/>

             </div>  

        </div>  

       

        </div>           
     
    )
}