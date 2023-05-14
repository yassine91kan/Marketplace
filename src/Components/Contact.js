import React from "react";
import image from './contact.jpg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import BasicTable from './Table.js';
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';



export default function Listings() {


   
    return (


        <div className="contact"> 



         <div className="sectiontext">

                
               <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundRepeat:"no-repeat",backgroundSize:"cover", height:500, display:"flex" }}>
                 
                        <div className="contacttext">

                        Contact us

                        </div>

                        <div className="formarea">

                                <h2 className="text1">    
                                    Feedback Form
                                </h2>

                        </div>


                </div>
               
                




        </div>  



       

        </div>           
     
    )
}