import React, { useState } from 'react'
import logo from "../assets/image/logo.png";
// import { Link } from 'react-router-dom';

const Header = () => {

    const [active , setActive]=useState("nav__menu");
    const [icon , setIcon]=useState("nav__toggler");

   const navToggle =()=>{
    if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");

      
    // Icon Toggler
    if (icon === "nav__toggler") {
        setIcon("nav__toggler toggleicon");
      } else setIcon("nav__toggler");
   }


  
  return (
    <header>
        <div className="container flexSb">
            <nav className='flexSb' >
<div className="logo">
    <img src={logo} alt="" />
</div>
<ul className={active}>
   <a href='#' >Home</a>
   <a href='#' >Series</a>
   <a href='#' >Movies</a>
   <a href='#' >Pages</a>
   <a href='#' >Pricing</a>
   <a href='#' >Contact</a>

</ul>

<div onClick={navToggle} className={icon}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>
            </nav>
            <div className="account flexSb">
                <i className='fa fa-search' ></i>
                <i className='fa fa-bell' ></i>
                <i className='fa fa-user' ></i>
                <button>Subscribe Now</button>
            </div>
        </div>
    </header>
  )
}

export default Header