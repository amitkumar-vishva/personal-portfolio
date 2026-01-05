import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Tech Solutions Ltd.",
    role: "Frontend Developer",
    duration: "Jan 2023 - Present",
    details: [
      "Developed responsive React applications",
      "Collaborated with design and backend teams",
      "Optimized performance and accessibility"
    ]
  },
  {
    company: "Web Innovations",
    role: "Intern",
    duration: "Jun 2022 - Dec 2022",
    details: [
      "Assisted in developing UI components",
      "Maintained documentation for projects",
      "Worked with APIs and backend integration"
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
