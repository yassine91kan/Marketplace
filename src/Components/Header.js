import React from "react"

export default function Header() {


   
    return (



        <nav className="Nav">

        <div className="Title">    

        SoilMarket 
        </div>

        <div>  

        <ul className="Nav-items">
          <li className="Nav-items-click">
            <a>Home</a>
          </li>

            <li className="Nav-items-click">
            <a>Resources</a>
          </li>

          <li className="Nav-items-click">
            <a>Contact Us</a>
          </li>

          <li className="Nav-items-click">
            <a>Search an Item</a>
          </li>

        </ul>

        </div>

        <div> 

        <button type="button" className="button-login">Login</button>

        <button type="button" className="button-create">Create Account</button>

        </div>

 
        </nav>

     


     
    )
}