import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Logic to send email
    const data = {
      name: name,
      email: email,
      message: message
    };
    console.log(data); // For demonstration purpose, you can replace this with actual logic to send email
  };

  return (
    <div className='page'> 
      <h2>Get In Touch </h2>
      <div className="contact-form">
        <p>If you are looking for a skilled developer with expertise in MongoDB, Express, React.js, Node, JavaScript, CSS, and more, I am ready to contribute to your team and help you achieve your project goals. Let's collaborate and create innovative solutions that drive success in the ever-evolving tech industry. Reach out to me today.</p>
      </div>
      <div className="contact-info">
      <a href="mailto:nikhita.jagadish@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </a>
          <a href="tel:+6362259038">
            <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
          </a>
      </div>
    </div>
  );
};

export default Contact;
