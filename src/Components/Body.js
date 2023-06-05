import React from "react"
import picsoil from '../Assets/picsoil.jpg';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import NearMeIcon from '@mui/icons-material/NearMe';
import image from './back-f.png';
import Header from './Header.js';

export default function Body() {


   
    return (



        




        <div className="bodytextparent"> 


        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", height:900
        }}>

         
        <div>

        <Header/>      
        
        </div>


        <div>

         <h1 className="bodytext">    

        Find The Best Selection Of Soil Listings 
     
        </h1> 

        <p className="paragtextn">A Comprehensive Listing of High Quality Soil Tailored for your Construction Needs with accessible features and easy to use platform</p> 


        <button type="button" className="button-discover">Discover More</button>

         <div className="diricon">
        <NearMeIcon sx={{ fontSize: 20 }} color="secondary"/>
        </div>


        </div>

        
        </div>

        </div>


      

       

        


     
    )
}