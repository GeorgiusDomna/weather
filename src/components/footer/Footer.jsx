import React from "react";
import gitLogo from '../../img/icons/github.svg'
import s from './footer.module.sass';

const Footer = () => {

  return (  
    <div className={s.footer}>
      <a href="https://github.com/GeorgiusDomna" target="_blank" className={s.link}>
        <img src={gitLogo} alt="gitLogo" className={s.link_img} />
        <p className={s.link_text}>created by GeorgiusDomna</p>
      </a>
    </div> 
  );
}

export default Footer;