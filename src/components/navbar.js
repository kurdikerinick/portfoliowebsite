import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="about" smooth={true} duration={500}>.about()</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>.skills()</Link></li>
        {/* <li><Link to="portfolio" smooth={true} duration={500}>.portfolio()</Link></li> */}
        <li><Link to="contact" smooth={true} duration={500}>.contact()</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
