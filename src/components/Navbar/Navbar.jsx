import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';
import "./Navbar.css";

import { Link } from 'react-router-dom';


function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(isHome);

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
    
    // below sections of commented code (2 sections) were an attempt to maintain state through refresh. Come back later to finish.

    // if (!isHome) {
    //   window.addEventListener("beforeunload", setIsHome(false));
    //   console.log("event listener firing test");
    // }

    return () => {
      navObserver.disconnect()
      // window.removeEventListener("beforeunload", setIsHome(false));
    }
  }, [])

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
            <Link onClick={() => setIsHome(false)} to="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* nav border is a check for intersection observer for the navbar */}
      <div className='nav-border' style={ isHome ? {top: '30%'} : {top: '10px'}}/>

      
      {/* second navbar class for mobile device breakpoint */}
      <div className="navbar-small">
        <div className="mobile-header">
          <h1>Deondre Garcia Photography</h1>
          <GiHamburgerMenu className="overlay-open" style={toggleMenu ? {display: 'none'} : {display: 'flex'} } fontSize={27} onClick={() => setToggleMenu(true)}/>
          <RiCloseCircleFill className='overlay-close' style={toggleMenu ? {display: 'flex'} : {display: 'none'} } fontSize={27} onClick={() => setToggleMenu(false)}/>
        </div>
        {toggleMenu && (
            <div className="navbar-small-overlay">
              <ul className="list-links-small">
                <li>
                  <Link onClick={() => {
                    setIsHome(true);
                    setToggleMenu(false);
                    }}  to='/'>Home</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    setIsHome(false);
                    setToggleMenu(false);
                    }}  to="/graduation">Graduation</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    setIsHome(false);
                    setToggleMenu(false);
                    }}  to="/portraits">Portraits</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    setIsHome(false);
                    setToggleMenu(false);
                    }}  to="/landscapes">Landscapes</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    setIsHome(false);
                    setToggleMenu(false);
                    }}  to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    setIsHome(false);
                    setToggleMenu(false);
                    }}  to="/about">About</Link>
                </li>
              </ul>
            </div>
        )}
      </div>
      
    </>
  );
}

export default Navbar;
