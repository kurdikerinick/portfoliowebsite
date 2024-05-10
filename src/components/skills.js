import React from 'react';
import './skills.css'; // Import CSS file for Skills component
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  return (
    <div className='skillspage'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <div className='skill-column'>
          <h3>Frontend</h3>
          <ul>
          <li>
              <i className="fab fa-react"></i> ReactJS
            </li>
            <li>
              <i className="fab fa-node-js"></i> NodeJS
            </li>
            <li>
              <i className="fab fa-react"></i> React Native
            </li>
            <li>
              <i className="fab fa-html5"></i> HTML5
            </li>
            <li>
              <i className="fab fa-css3-alt"></i> CSS3
            </li>
            <li>
              <i className="fab fa-js"></i> JavaScript
            </li>
          </ul>
        </div>
        <div className='skill-column'>
          <h3>Databases</h3>
          <ul>
            <li>
              <i className="fas fa-database"></i> SQL
            </li>
            <li>
              <i className="fas fa-database"></i> MongoDB
            </li>
          </ul>
        </div>
        <div className='skill-column'>
          <h3>Frameworks</h3>
          <ul>
            <li>
              Express
            </li>
            <li>
              Material-UI
            </li>
            <li>
              Axios
            </li>
            <li>
              Expo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
