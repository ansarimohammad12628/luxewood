import React from "react";

import "../Css/ContactPage.css";
const ContactPage = () => {
  return (
    <>
     <div className="main-container">
      <div className="bg-banner">
        <div className="bg-bannercolor">
          <div className="main-text">CONTACT US</div>
        </div>
      </div>

      <div className="contact-area">
  <div className="contact-box">
    <h2>Get in Touch</h2>

    <div className="input-group">
      <input type="text" placeholder="Your Name" />
    </div>

    <div className="input-group">
      <input type="email" placeholder="Your Email" />
    </div>

    <div className="input-group">
      <textarea placeholder="Your Message" rows="5"></textarea>
    </div>

    <button className="send-btn">Send Message</button>
  </div>
</div>

     </div>
    </>
  );
};

export default ContactPage;
