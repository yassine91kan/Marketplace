import React from "react";
import picsoil from './Fotor_AI.png';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import BasicTable from './Table.js';
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';



export default function Listings() {


   
    return (


        <div className="section"> 

        <img src={picsoil} alt="BigCo Inc. logo" height="600"/>

         <div className="sectiontext">

                

                <h3 className="sectionhead">Our Commitment</h3>

                        <div className="listheadwrapper"> 

                        <div className="listhead"> 

                                <div className="bar"> </div> 

                                <h4 className="listheadtext">Find Nearby Soil Supply Sources and Vendors</h4>

                                <WifiFindIcon color="error" sx={{ fontSize: 30 }}/>

                                

                        </div> 

                            <div className="listheadparag">

                            <p>This is your one stop shop to find a varierty of listings</p>

                            </div>

                        </div>

                        <div className="listheadwrapper"> 


                            <div className="listhead"> 
                                 <div className="bar"> </div>
                                 <h4 className="listheadtext">Review Soil Load Information submitted by the Vendor</h4>
                                 <PendingActionsIcon color="error" sx={{ fontSize: 30 }}/>

                            </div> 


                            <div className="listheadparag">

                                <p>This is your one stop shop to find a varierty of listings</p>

                            </div>


                        </div>

                        <div className="listheadwrapper">

                            <div className="listhead">  
                                 <div className="bar"> </div>
                                 <h4 className="listheadtext">Connect with Vendors and Finalize the Order</h4>
                                 <SensorOccupiedIcon color="error" sx={{ fontSize: 30 }}/>

                             </div>

                             <div className="listheadparag">

                                <p>This is your one stop shop to find a varierty of listings</p>

                            </div>


                         </div>
          

        </div>  



       

        </div>           
     
    )
}