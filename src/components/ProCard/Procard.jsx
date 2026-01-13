import React from "react";
import "./Procard.css";

const Procard = (props) => {
  return (
    <div className="project-card">
      
      {/* Top Image */}
      <div className="card-image">
        <img src={props.imageUrl} alt={props.name} />
      </div>

      {/* Content */}
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.title}</p>

        {/* Tech Tags */}
        <div className="tech-tags">
          {props.tech?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="card-buttons">
        <a href={props.demoLink} target="_blank" rel="noreferrer">
          View Demo
        </a>
        <a href={props.codeLink} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>

    </div>
  );
};

export default Procard;
