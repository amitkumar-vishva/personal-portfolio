// Home.jsx
import "./Home.css";
import image from "../../assets/image.png";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";


function Home() {
  return (
    <section className="home" id="home">
      
      {/* Left content */}
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>AMIT KUMAR</h1>
        {/* line animation ke liye */}
        <h2 className="typing">
          <Typewriter
          words={["WEB DEVELOPER", "FRONTEND DEVELOPER", "EDITOR"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          />
        </h2>

        <p>
          I build modern, responsive and user-friendly websites<br/> using
          React JS and modern web technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Download cv ↓</a>
        </div>
         {/* ye social icon ke liye hai */}
        <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
        </div>

      </div>

      {/* Right image */}
      <div className="profile-container">
        <div className="animated-border"></div>
        <div className="profile-img-box">
          <img src={image} alt="Profile" />
        </div>
      </div>

    </section>
  );
}

export default Home;
