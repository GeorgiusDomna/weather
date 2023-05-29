import React from "react";
import gitLogo from '../../img/icons/github.svg'
import './style.css';

const Footer = () => {

  return (  
    <div className="footer">
      <a href="https://github.com/GeorgiusDomna" target="_blank" className="footer-link">
        <img src={gitLogo} alt="gitLogo" className="footer-link_img" />
        <p className="footer-link_text">created by GeorgiusDomna</p>
      </a>
    </div> 
  );
}

export default Footer;