import React from "react";
import picsoil from './Fotor_AI.png';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import BasicTable from './Table.js';
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';



export default function Listings() {


   
    return (


        <div className="section"> 

        <img src={picsoil} alt="BigCo Inc. logo" height="600"/>

         <div className="sectiontext">

                

                <h3 className="Nav-items-click">Road to Success Starts Here</h3>

                        <div className="listhead"> 
                        <Filter1RoundedIcon sx={{ fontSize: 30 }} color="primary"/>
                        <h4 className="listheadtext">Find Nearby Soil Supply Sources and Vendors</h4>
                        </div>  
                        <div className="listhead"> 
                        <Filter1RoundedIcon sx={{ fontSize: 30 }} color="primary"/>
                        <h4 className="listheadtext">Review Soil Load Information submitted by the Vendor</h4>
                        </div> 
                        <div className="listhead">  
                        <Filter1RoundedIcon sx={{ fontSize: 30 }} color="primary"/>
                        <h4 className="listheadtext">Connect with Vendors and Finalize the Order</h4>
                         </div>
          

        </div>  



       

        </div>           
     
    )
}