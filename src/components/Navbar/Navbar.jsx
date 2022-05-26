import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';
import "./Navbar.css";

import { Link } from 'react-router-dom';


function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navOptions = {
    root: null,
    threshold: 1,
    rootMargin: '-20px 0px -150px 0px'
  }
  const navObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector('.navbar').classList.add('navbar-transition');
        navObserver.unobserve(entry.target);
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
        <ul className="list-links">
          <li>
            <Link onClick={() => setIsHome(true)} to='/'>Home</Link>
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
      <div className='nav-border' style={ isHome ? {top: '30%'} : {top: '10px'}}/>

      
      {/* second navbar class for mobile device breakpoint */}
      <div className="navbar-small">
      <GiHamburgerMenu className="overlay-open" style={toggleMenu ? {display: 'none'} : {display: 'flex'} }color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
            <div className="navbar-small-overlay">
              <RiCloseCircleFill className='overlay-close' color='#fff' onClick={() => setToggleMenu(false)}/>
              <ul className="list-links-small">
                <li>
                  <Link onClick={() => setIsHome(true)} onClick={() => setToggleMenu(false)} to='/'>Home</Link>
                </li>
                <li>
                  <Link onClick={() => setIsHome(false)} onClick={() => setToggleMenu(false)} to="/graduation">Graduation</Link>
                </li>
                <li>
                  <Link onClick={() => setIsHome(false)} onClick={() => setToggleMenu(false)} to="/portraits">Portraits</Link>
                </li>
                <li>
                  <Link onClick={() => setIsHome(false)} onClick={() => setToggleMenu(false)} to="/landscapes">Landscapes</Link>
                </li>
                <li>
                  <Link onClick={() => setIsHome(false)} onClick={() => setToggleMenu(false)} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={() => setIsHome(false)} onClick={() => setToggleMenu(false)} to="/aboutme">About Me</Link>
                </li>
              </ul>
            </div>
        )}
      </div>
      
    </>
  );
}

export default Navbar;
