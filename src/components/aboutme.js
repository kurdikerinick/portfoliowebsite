// AboutMe.js
import './aboutme.css';
import ProfileImage from '../components/CVFile/profile.jpg'; // Import your profile image
import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className='aboutpage'>
      <div className='content'>
      <h2>&lt;about&gt;</h2>
        <div className='details'>
        
          <p><strong>Driven Developer:</strong><br />
            With a year-long journey exploring MongoDB,  React.js,React Expo, Node, JavaScript, and CSS, I've honed my skills in crafting dynamic and scalable solutions. My passion lies in crafting high-quality software that not only meets but exceeds expectations.
          </p>
          <p>
            <strong>Professional Journey:</strong><br />
            At Farmercoin - Smart Robotics Solutions Pvt. Ltd., I've led the charge in developing innovative React Expo apps, integrating IoT capabilities, and spearheading AI/ML initiatives. My focus remains on pushing boundaries, delivering impactful solutions, and staying ahead of the curve.
          </p>
  
          <p>
            <strong>Academic Pursuits:</strong><br />
            A holder of an M.SC in Computer Science, I'm fueled by curiosity and a drive to make a difference in the tech world.
          </p>
        </div>
       
      </div>
      <h2>&lt;/about&gt;</h2>
    </div>
  );
};

export default AboutMe;
