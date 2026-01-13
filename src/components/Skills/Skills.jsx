import React from "react";
import "./Skills.css"
import Card from "../Card/Card";
import image1 from "../../assets/react.png"
function Skills(){
    return(
        <div id="skills">
            <div className='topcontainer'>
                <h1>My Skills</h1>
                <p>Technologies I work with to bring ideas to life</p>
            </div>
            
           <div className="cards-container">
            <Card
                name={
                    <>
                    Technical <br /> Skills
                    </>
                    }
                title="Building responsive and interactive user interfaces with modern frameworks."
                imagesUrl={image1}
                lang1="html5"
                lang2="css3"
                lang3="javaScript (ES6+)"
                lang4="React.js"
            />
            <Card
                name={<>Tools & <br /> Technologies</>}
                title="Optimizing websites for speed and performance."
                imagesUrl={image1}
                lang1="Git, GitHub"
                lang2="Visual Studio Code"
                lang3="IntelliJ IDEA"
                lang4="?"
            />  
            {/* <Card
                name={<>Office <br /> Skills</>}
                title="Designing clean and user-friendly interfaces."
                imagesUrl={image1}
                lang1="MS Word"
                lang2="MS Excel"
                lang3="PowerPoint"
                lang4="Notepad"
            /> */}
            <Card
                name={<>Soft <br /> Skills</>}
                title="Designing clean and user-friendly interfaces."
                imagesUrl={image1}
                lang1="Good Communication (English & Hindi)"
                lang2="Desing Thinking"
                lang3="Editor"
                lang4="Problem Solving"
            />
            {/*  4th card automatically NEXT ROW me jayega */}
            {/* <Card
                name={<>Backend <br /> Basics</>}
                title="Basic backend knowledge and API handling."
                imagesUrl={image1}
                lang1="Node"
                lang2="Express"
                lang3="API"
                lang4="Mongo"
            /> */}
           </div>
        </div>
       
    )
}
export default Skills;