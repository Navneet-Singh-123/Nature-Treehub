import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_section about">
          <h1 className="logo-text">
            <span>Nature: </span>The tree hub
          </h1>
          <p>
            Treehub is website where the customers can buy the the plants and
            seeds for their home. It provides the customers with the facility to
            order them from the nearby nurseries
          </p>
          <div className="contact">
            <span>
              <i class="fa fa-phone"></i> &nbsp; 123-456-789
            </span>
            <span>
              <i className="fa fa-envelope"></i> &nbsp; info@treehub.com
            </span>
          </div>
          <div className="socials">
            <a href="#" style={{ color: "white" }}>
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer_section links">
          <h2>Quick Links</h2>
          <ul>
            <Link to="/team" className="link"><li>Team</li></Link>
            <Link to="/faq" className="link"><li>FAQ and Guidlines</li></Link>
            
            <a href="#" className="link">
              <li>Help</li>
            </a>
            <a href="#" className="link">
              <li>Notifications</li>
            </a>
            <a href="#" className="link">
              <li>Gallery</li>
            </a>
            <a href="#" className="link">
              <li>Terms and Conditions</li>
            </a>
          </ul>
        </div>
        <div className="footer_section contact_form">
          <h2>Contact Us</h2>
          <form action="#">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fa fa-envelope"></i> Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer_bottom">
        &copy; treehub.com | Experience the nature
      </div>
    </div>
  );
}

export default Footer;
