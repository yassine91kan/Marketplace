import React from "react";


export default function Header() {



        const [disp, setdisp] = React.useState(true)


        function handleClick()

        {

              setdisp(!disp)

        }

        const styles={

            transform:disp? "" : "translateX(100%)"

        }


   
    return (


      <header className="primary-header">


                <div className="Title">    
                 
                </div>
          
                <button aria-controls="primary-navigation" aria-expanded="false" className="mobile-nav-toggle" onClick={handleClick}> <span className="sr-only"></span></button>


                <nav style={styles} className="Nav">

                            

                    <div>  

                    <ul id="primary-navigation" className="Nav-items">
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

                      <li className="Nav-items-click" id="login">
                        <a>Login</a>
                      </li>

                      <li className="Nav-items-click" id="sign">
                        <a>Sign Up</a>
                      </li>

                    </ul>

                    </div>

                
                
                </nav>


         </header>
     

     
    )
}