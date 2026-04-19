import React from 'react';
import '../../css/contact.css';

const Contact = ({ className = "" }) => {
  return (
    <div id="contact" className={`container py-4 ${className}`.trim()}>
      <div className="row justify-content-center">
        <div className="col-4 col-md-1 d-flex justify-content-center">
          <a href="mailto:andrearovescalli@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="img/email.png" alt="posta" />
          </a>
        </div>
        <div className="col-4 col-md-1 d-flex justify-content-center"> 
          <a href="https://github.com/riibiax/" target="_blank" rel="noopener noreferrer">
            <img src="img/github.png" alt="github" />
          </a>
        </div>
        <div className="col-4 col-md-1 d-flex justify-content-center"> 
          <a href="https://www.linkedin.com/in/andrea-rovescalli/" target="_blank" rel="noopener noreferrer">
            <img id="linkedin" src="img/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
