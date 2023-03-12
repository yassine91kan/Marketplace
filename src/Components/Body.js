import React from "react"
import picsoil from '../Assets/picsoil.jpg';

export default function Body() {


   
    return (


        <div className="bodytextparent"> 


        <div>

         <h1 className="bodytext">    

        Find The Best Selection Of <span className="soiltext">Soil</span> Listings 

        </h1> 

        <p className="paragtext">A Comprehensive Listing of High Quality Soil Tailored for your Construction Needs with accessible features and easy to use platform</p> 

        <button type="button" className="button-discover">Discover More</button>

        </div>

        <div className="bodytext">    

        <img src={picsoil} alt="Girl in a jacket" width="500" height="400"/>

        </div>  



       

        </div>
      

       

        


     
    )
}