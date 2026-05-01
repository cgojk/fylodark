

 import React, { useState}from "react";
 import { Link, NavLink } from "react-router-dom";
 import { FaBars, FaTimes } from "react-icons/fa"

import logo from "../assets/images/logo.svg";

export default function Navigation(){

 const[menuOpen,setMenuOpen]= useState(false);
 // close the menu when clicking outside

  function handleLinkClick(){
    setMenuOpen(false);
  }

return (

<header className="header">
<div className="header__inner">
        <Link to="/">
        <img src={logo} className=" nav-logo" alt="Fylo logo" />
       </Link>


     {/* hamburguer button only visible on mobile */}
     

     <button
        className="menu-btn"
        aria-label="toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes  /> : <FaBars  />}
    </button>

    {/* Nav list, toggled open on mobile */}

  <nav className="navigation" aria-label="homepage Navigation">
        
        <ul className={`nav__list ${menuOpen ? "open" : ""}`}>
             <li className="nav-logo">
                <Link to="/">
                <img src={logo} className="mobile-logo nav-logo" alt="Podcast logo" />
                </Link>
          </li>
            <li className="nav__items">

                <NavLink to="/features" 
                onClick={handleLinkClick}
                className="nav__items__links" href="#">Features</NavLink>
            </li>
            <li className="nav__items">
                <NavLink to="/team" 
                onClick={handleLinkClick}
                className="nav__items__links" href="#">Team</NavLink>
            </li>
            <li className="nav__items">
                <NavLink to="/sign-in" 
                onClick={handleLinkClick}
                className="nav__items__links" href="#">Sign In</NavLink>
            </li>
        </ul>
     </nav>
    </div>
 </header>

);
}





