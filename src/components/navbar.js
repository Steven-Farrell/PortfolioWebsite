/** @format */

import React, { useState } from "react";
import "../css/navbar.css";
import "../css/img.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <img id="logo" src="/images/logo192.png" />
      <a href="#" className="nav__brand">
        Watch Me While I Code!
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About This Website
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            ToDo List
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Basic Calculator
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
