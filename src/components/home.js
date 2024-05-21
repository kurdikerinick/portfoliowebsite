// Home.js
import React from 'react';
import './home.css'; // Import CSS file for Home component
import Skills from './skills';
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Contact from './contact';
import NavBar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faPinterest, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CVFile from '../components/CVFile/NikhitaJK.pdf'; // Import the PDF file

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CVFile; // Set the href attribute to the PDF file
    link.download = 'NIKHITA_JK_CV.pdf'; // Set the download attribute to specify the filename
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Simulate a click on the link
    document.body.removeChild(link); // Remove the link from the document body after clicking
  };

  return (
    <div>
      <NavBar />
      <div className="home-content">
        <div className="page">
          <div className="left-content">
            <p>Hi, My name is</p>
            <h1>NIKHITA KURDIKERI</h1>
            <p>I’m a software engineer and skilled React developer dedicated to creating innovative and user-friendly web and App solutions that deliver high-quality projects that exceed expectations.</p>
            <button className="cv-button" onClick={handleDownload}>Download CV</button>
          </div>
        </div>
      </div>
      <div id="about" className="page aboutme-section">
        <AboutMe />
      </div>
      <div id="skills" className="page skills-section">
        <Skills />
      </div>
      {/* <div id="portfolio" className="page portfolio-section">
        <Portfolio />
      </div> */}
      <div id="contact" className="page contact-section">
        <Contact />
      </div>
      {/* Other Contact Icons */}
      <div className='other-contact'>
        <a href="http://www.linkedin.com/in/nikhita-kurdikeri" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
        <a href="https://github.com/kurdikerinick" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='icon' />
        </a>
        <a href="https://t.me/NikhitaKurdikeri" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className='icon' />
        </a>
        <a href="https://www.pinterest.com/pintastic_pin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} className='icon' />
        </a>
      </div>
      <footer className="footer">
        <div className="line"></div> {/* This div draws the line */}
        <p>Copyright © {new Date().getFullYear()} Nikhita Kurdikeri</p>
      </footer>
      {/* New styled div */}
      <div className="styled-div"></div>
    </div>
  );
};

export default Home;
