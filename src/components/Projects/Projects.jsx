import React from "react";
import "./Projects.css";
import Projectcard from "../ProCard/Procard";
// import image2 from "../../assets/react.png";
import image1 from "../../assets/protfolio.jpg";
import image2 from "../../assets/food.jpeg";
import image3 from "../../assets/ai.avif";
import image4 from "../../assets/vishva.png";
import image5 from "../../assets/invest.avif";

function Projects() {
  return (
    <div id="project">
      <div className="topcontainer">
        <h1>My Projects</h1>
        <p>A selection of my recent work</p>
      </div>

      <div className="cards-container">
        <Projectcard
          imageUrl={image1}
          name="Portfolio Website"
          title="React based personal portfolio website"
          tech={["HTML", "CSS", "JavaScript","React"]}
          demoLink="https://demo.com"
          codeLink="https://github.com/yourrepo"
        />

        <Projectcard
          imageUrl={image2}
          name="Ecommerce website"
          title="Online platform for ordering food from local restaurants"
          tech={["html", "Tailwind CSS", "React"]}
          demoLink="#"
          codeLink="#"
        />

        <Projectcard
          imageUrl={image3}
          name="AI Component Generator"
          title="AI-powered tool to generate reusable UI components instantly."
          tech={["html", "Tailwind CSS", "React"]}
          demoLink="#"
          codeLink="#"
        />

        <Projectcard
          imageUrl={image4}
          name="Vishva IT Solutions"
          title="Worked on company’s official website during<br/> internship"
          tech={["html", "css", "javaScript"]}
          demoLink="https://vishvaitsolutions.in/"
          codeLink="#"
        />

        <Projectcard
          imageUrl={image5}
          name="Investment Management Website"
          title="Worked on an investment-based web application"
          tech={["html ,css3 ,js(ES6+)", "php", "MySql"]}
          demoLink="#"
          codeLink="#"
        />

        <Projectcard
          imageUrl={image2}
          name="Another Project"
          title="Some project description here website"
          tech={["React", "Node.js", "Express"]}
          demoLink="#"
          codeLink="#"
        />
        {/* Aur bhi projects add kar sakte ho */}
      </div>
      <a
          href="https://github.com/amitkumar-vishva"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          View More Projects
      </a>

    </div>
  );
}

export default Projects;
