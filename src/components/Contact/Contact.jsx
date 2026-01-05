import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-top">
        <h1>Contact Me</h1>
        <p>Let’s work together or just say hello</p>
      </div>

      <div className="contact-container">
        {/* Left side - Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right side - Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>New Delhi, India</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>youremail@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone />
            <span>+91 98765 43210</span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
