import React from "react";
import "../Css/Footer.css";
import { Link } from "react-router-dom";

import icon1 from "../assets/Images/SVG/facebook-svgrepo-com (6).svg";
import icon2 from "../assets/Images/SVG/icon-twitter-white.svg";
import icon3 from "../assets/Images/SVG/icon-instagram-white.svg";
import icon4 from "../assets/Images/SVG/icon-youtube-white.svg";
import icon5 from "../assets/Images/SVG/icon-pinterest-white.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-cotainer">
        <div className="shop-text">ShopApp</div>

        <div className="section-down">
          <div className="footer-section">
            <div className="footer-title">Quick Links</div>
            <div className="footer-text">Home</div>
            <div className="footer-text">Shop</div>
            <div className="footer-text">About Us</div>
            <div className="footer-text">Contact</div>
          </div>

          <div className="footer-section">
            <div className="footer-title">Help</div>
            <div className="footer-text">FAQ</div>
            <div className="footer-text">Returns</div>
            <div className="footer-text">Shipping</div>
            <div className="footer-text">Privacy Policy</div>
          </div>
          <div className="footer-section">
            <div className="footer-title">Contact</div>
            <div className="footer-text">support@shoop.com</div>
            <div className="footer-text">+91 9876543210</div>

             <div className="section-icon">
          <div className="social-icon">
            <img src={icon1} alt="" />
          </div>
          <div className="social-icon">
            <img src={icon2} alt="" />
          </div>
          <div className="social-icon">
            <img src={icon3} alt="" />
          </div>
          <div className="social-icon">
            <img src={icon4} alt="" />
          </div>
          <div className="social-icon">
            <img src={icon5} alt="" />
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
