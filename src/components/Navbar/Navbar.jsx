import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';


function Navbar() {
  const[isHome, setIsHome] = useState(true);

  const navOptions = {
    root: null,
    threshold: 1,
    rootMargin: '-20px 0px -150px 0px'
  }
  const navObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector('.navbar').classList.add('navbar-transition');
        navObserver.unobvserve(entry.target);
      }
  })
  }, navOptions);

  useEffect(() => {
    const navRef = document.querySelector('.nav-border');
    navObserver.observe(navRef);

    return () => {
      navObserver.disconnect()
    }
  })

  return (
    <>
      <div className="navbar">
        <div className="icon-name">Deondre Garcia Photography</div>
        <ul className="list-links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link onClick={() => setIsHome(false)} to="/graduation">Graduation</Link>
          </li>
          <li>
            <Link onClick={() => setIsHome(false)} to="/portraits">Portraits</Link>
          </li>
          <li>
            <Link onClick={() => setIsHome(false)} to="/landscapes">Landscapes</Link>
          </li>
          <li>
            <Link onClick={() => setIsHome(false)} to="/contact">Contact</Link>
          </li>
          <li>
            <Link onClick={() => setIsHome(false)} to="/aboutme">About Me</Link>
          </li>
        </ul>
      </div>
      {/* nav border is a check for intersection observer for the navbar */}
      <div className='nav-border' style={ isHome ? {top: '50%'} : {top: '10px'}}/>
    </>
  );
}

export default Navbar;
