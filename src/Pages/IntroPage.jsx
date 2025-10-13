import React from "react";

import "../Css/IntroPage.css";

const IntroPage = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-content">
          <div className="heading">Welcome to MyShop</div>
          <p className="intro-para">
            Your one-stop online shop for everything you need!
          </p>
          <a href="/login" className="btn">
            Start Shopping
          </a>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
