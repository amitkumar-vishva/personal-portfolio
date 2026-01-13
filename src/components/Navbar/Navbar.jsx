// Navbar.jsx
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // state for hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side logo */}
      <h1 className="logo">PORTF<span className="logo1">OLIO</span></h1>

      {/* Hamburger icon (only mobile) */}
      <div
  className={`hamburger ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

      {/* Right side menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
