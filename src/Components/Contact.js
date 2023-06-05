import React from "react";
import image from './contact-c.jpg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import BasicTable from './Table.js';
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';
import TextField from '@mui/material/TextField';



export default function Listings() {


   
    return (


        <div className="contact"> 



         <div className="sectiontext">

                
               <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundRepeat:"no-repeat",backgroundSize:"cover", height:500, display:"flex"}}>
                 
                        <div className="contacttext">

                        Contact us

                        </div>

                        <div className="formarea">

                                <h2 className="text1">    
                                    Feedback Form
                                </h2>

                                <div className="textfield">
                                <TextField
                                  id="standard-search"
                                  fullWidth label="Name"
                                  type="search"
                                  variant="standard"
                                />
                                </div>

                                <div className="textfield">
                                <TextField
                                  id="standard-search"
                                  fullWidth label="Email"
                                  type="search"
                                  variant="standard"
                                />
                                </div>

                                <div className="textfield">
                                <TextField
                                  id="standard-search"
                                  fullWidth label="Phone"
                                  type="search"
                                  variant="standard"
                                />
                                </div>
                                
                                <div className="textfield">
                                 <TextField
                                  fullWidth label="Message" 
                                  id="fullWidth"
                                  type="search"
                                  variant="standard"
                                />
                                </div>


                                <div className="buttonfield">
                                <button type="button" className="button-send">SEND MESSAGE -></button>
                                </div>


                        </div>


                </div>
               
                




        </div>  



       

        </div>           
     
    )
}