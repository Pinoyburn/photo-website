import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';


function Navbar() {
  const[icon, setIcon] = useState(false);

  const navOptions = {
    root: null,
    threshold: 1,
    rootMargin: '0px 0px -150px 0px'
  }
  const navObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector('.navbar').classList.add('navbar-transition');
        setIcon(true);
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
            <Link to="/graduation">Graduation</Link>
          </li>
          <li>
            <Link to="/portraits">Portraits</Link>
          </li>
          <li>
            <Link to="/landscapes">Landscapes</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
        </ul>
      </div>
      <div className='nav-border' />
    </>
  );
}

export default Navbar;
