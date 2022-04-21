import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon">Deondre Shoots Photography</div>
      <ul className="list-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Graduation</a>
        </li>
        <li>
          <a href="/">Portraits</a>
        </li>
        <li>
          <a href="/">Landscapes</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
