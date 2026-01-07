import React from "react";
import "./Project.css";
import Projectcard from "../ProCard/Projectcard";
// import image2 from "../../assets/react.png";
import image1 from "../../assets/protfolio.jpg";
import image2 from "../../assets/food.jpeg";
import image3 from "../../assets/ai.avif";

function Project() {
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
          imageUrl={image2}
          name="Another Project"
          title="Some project description here website"
          tech={["React", "Node.js", "Express"]}
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
    </div>
  );
}

export default Project;
