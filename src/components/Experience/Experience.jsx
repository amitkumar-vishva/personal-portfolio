import React from "react";
import "./Experience.css";

const experiences = [
  // {
  //   company: "Tech Solutions Ltd.",
  //   role: "Frontend Developer",
  //   duration: "Jan 2023 - Present",
  //   details: [
  //     "Developed responsive React applications",
  //     "Collaborated with design and backend teams",
  //     "Optimized performance and accessibility"
  //   ]
  // },
  {
    company: " Front End Designer",
    role: "Intern",
    duration: "1st September 2025  - to 1st December 2025 ",
    details: [
      "UI modification of existing project modules.",
      "Designing and adding new front-end features as per project requirements.",
      "Enhancing layout structure to ensure better usability and responsiveness."
    ]
  }
];

function Experience() {
  return (
    <div id="experience">
      <div className="exp-top">
        <h1>My Experience</h1>
        <p>A glimpse of my professional journey</p>
      </div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <div className="exp-header">
              <h3>{exp.role}</h3>
              <span>{exp.company}</span>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <ul>
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
