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
        <p className="person-graph">I am a passionate Front-End Developer specializing in React.js.<br />
          I started my journey with HTML and CSS and later moved to JavaScript<br/> and React to build modern, responsive web applications.<br /><br />
          I have completed a 3-month internship at Vishva IT Solutions, <br/>where I gained hands-on experience in frontend development.</p>
          {/* Box coding start now */}
        <div className="main-box">
          {/* first box */}
           <div className="info-box">
              <h5 className="person">Passion</h5>
              <p className="person-graph">
                I love designing unique solutions to challenging problems with cutting-edge technologies.
              </p>
            </div>

            <div className="info-box">
              <h5 className="person">Goal</h5>
              <p className="person-graph">
                To build modern, responsive, and user-friendly web applications while constantly improving my frontend development skills.
              </p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default About;
