import React from "react";

import "../Css/IntroPage.css";
import { Link } from "react-router-dom";


const IntroPage = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-content">
          <div className="heading">Welcome to MyShop</div>
          <p className="intro-para">
            Your one-stop online shop for everything you need!
          </p>
        <Link to="/login"><a href="" className="btn">
            Start Shopping
          </a></Link>  
        </div>
      </div>
    </>
  );
};

export default IntroPage;
