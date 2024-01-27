import React from "react";
import '/src/index.css';
import jsLogo from '/jsLogo.png';
import linkedinLogo from '/linkedinLogo.png';
import githubLogo from '/githubLogo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="jsLogo">
          <img src={jsLogo} alt="JS Logo"/>
        </div>
        <div className="middle" >
          <h1>JavaScript Course</h1>
        </div>
        <div className="right">
          <a href="https://www.linkedin.com/in/maxlasitsa/" target="_blank" >
            <img src={linkedinLogo} alt="LinkedIn Logo"/>
          LinkedIn</a>
          <a href="https://github.com/mlasitsa" target="_blank"  >
          <img src={githubLogo} alt="GitHub Logo"/>
          GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Header;