import React from "react";
import '/src/index.css';
import myself from '/myself.png';

const MainPage = () => {
    return (
      <div>
        <div className="main-layout">
          <img src={myself} alt="Picture of Max Lasitsa" className="logo" />
            <div className="text-content">
              <h1>Hi, Everyone</h1>
              <h2>My name is Maxim Lasitsa</h2> 
              <h2>and I am an international student</h2>
              <h2>@The College of St. Scholastica</h2>
            </div>
        </div>
          <div className="course-description">
            <p>I have made this mini-course/cheat sheet so everyone who wants</p>
            <p>to learn JavaScript can use this resource.</p>
            <p>I have included explanations as well as examples that you can run and see how specific parts of</p>
            <p>code are working.</p>
        </div>
      </div>

    );
  };
  
  export default MainPage;
  