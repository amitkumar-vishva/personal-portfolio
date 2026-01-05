import React from 'react';
import "./About.css";
import profilePic from "../../assets/image.png";
import jsIcon from "../../assets/git4.png";
import reactIcon from "../../assets/node3.png";
import pythonIcon from "../../assets/react2.png";
import htmlIcon from "../../assets/python8.png";
import cssIcon from "../../assets/tailwind6.png";
import nodeIcon from "../../assets/moanogdb5.png";
import gitIcon from "../../assets/git4.png";
import sqlIcon from "../../assets/node3.png";

function About() {
  return (
    <div id="about">
      <div className='topcontainer'>
        <h1>About Me</h1>
        <p>Get to know about my background and passion</p>
      </div>

      <div className="portfolio-container">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile"/>
        </div>

        <div className="orbit">
          <div className="icon" style={{ "--i": 1 }}><img src={jsIcon} alt="JavaScript" /></div>
          <div className="icon" style={{ "--i": 2 }}><img src={reactIcon} alt="React" /></div>
          <div className="icon" style={{ "--i": 3 }}><img src={htmlIcon} alt="HTML" /></div>
          <div className="icon" style={{ "--i": 4 }}><img src={pythonIcon} alt="Python" /></div>
          <div className="icon" style={{ "--i": 5 }}><img src={cssIcon} alt="CSS" /></div>
          <div className="icon" style={{ "--i": 6 }}><img src={nodeIcon} alt="Node.js" /></div>
          <div className="icon" style={{ "--i": 7 }}><img src={gitIcon} alt="Git" /></div>
          <div className="icon" style={{ "--i": 8 }}><img src={sqlIcon} alt="SQL" /></div>
        </div>
      </div>

      <div className="leftside-containt">
        <h1 className="person">My Journey</h1>
        <p className="person-graph">I'm a passionate full-stack developer with over 5 years of experience<br/>
          creating digital solutions for businesses around the world.<br/>
          My journey started with basic HTML/CSS websites and has evolved into building<br/> 
          complex web applications with modern frameworks.</p>
        <div className="main-box">
           <div class="info-box">
              <h5 class="person">My Journey</h5>
              <p class="person-graph">
                I love creating unique solutions to complex problems with cutting-edge technologies.
              </p>
            </div>

            <div class="info-box">
              <h5 class="person">My Journey</h5>
              <p class="person-graph">
                I love creating unique solutions to complex problems with cutting-edge technologies.
              </p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default About;
