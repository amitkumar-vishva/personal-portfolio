import React from "react";
import "./Project.css";
import Projectcard from "../ProCard/Projectcard";
import image2 from "../../assets/react.png";

function Project() {
  return (
    <div id="project">
      <div className="topcontainer">
        <h1>My Projects</h1>
        <p>A selection of my recent work</p>
      </div>

      <div className="cards-container">
        <Projectcard
          imageUrl={image2}
          name="Portfolio Website"
          title="React based personal portfolio website"
          tech={["React", "CSS", "JavaScript"]}
          demoLink="https://demo.com"
          codeLink="https://github.com/yourrepo"
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
