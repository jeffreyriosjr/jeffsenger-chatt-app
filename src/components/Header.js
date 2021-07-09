import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = (props) => {
  return(
    <header className="header text-align-center align-items-center d-flex">
        
          <div className="logo px-5 text-align-center">Welcome Team Alkali</div>
            <ul className="rightMenu">
              <button className="logout mb-3"style={props.logout}>Logout</button>
              
            </ul>
        

    </header>
   )

 }

export default Header;