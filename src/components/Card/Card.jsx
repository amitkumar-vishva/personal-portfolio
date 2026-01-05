import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="skill-card">
      <div className="card-header">
        <img src={props.imagesUrl} alt="icon" className="card-icon" />
        <span className="card-title">{props.name}</span>
      </div>

      <p className="card-desc">{props.title}</p>

      <div className="tech-tags">
        <span>{props.lang1}</span>
        <span>{props.lang2}</span>
        <span>{props.lang3}</span>
        <span>{props.lang4}</span>
      </div>
    </div>
  );
};

export default Card;
