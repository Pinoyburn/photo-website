import React from "react";
import "./Navbar.css";

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon name">Deondre Shoots</div>
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
      <div className="icon photography">Photography</div>
    </div>
  );
}

export default Navbar;
