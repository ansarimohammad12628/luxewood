import React from "react";

import "../Css/HomePage.css";

import badimage from "../assets/Images/PNG/badimage.png";

import client1 from "../assets/Images/PNG/client-1.png";
import client2 from "../assets/Images/PNG/client-2.png";
import client3 from "../assets/Images/PNG/client-3.png";
import client4 from "../assets/Images/PNG/client-4.png";
import client5 from "../assets/Images/PNG/client-5.png";
import client6 from "../assets/Images/PNG/client-6.png";
import chairimage from "../assets/Images/PNG/ad-banner-4.png";
import chairimage2 from "../assets/Images/PNG/ad-banner-5.png";
import chairimage3 from "../assets/Images/PNG/ad-banner-6.png";
import chairimage4 from "../assets/Images/PNG/ad-banner-7.png";
import { useDispatch } from "react-redux";
import { addtocart } from "../Feature/userSlice";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="section">
          <div className="top-text">New Way to Design Your Home</div>
          <div className="para">
            <p>
              I never thought I could feel so free! Well we're movin' on up to
              the east side to a deluxe apartment in the sky
            </p>
            <p>just two good ol' boys Never meanin.</p>
          </div>

          <div className="sofa">
            <img src={badimage} alt="" />
          </div>
        </div>

        <div className="main-card-section">
          <div className="left-card">
            <div className="card2">
              <div className="left-image">
                <img src={chairimage} alt="" />
              </div>
              <div className="right-card-part">
                <div className="right-part">
                  <div className="card-text">
                    <p>
                      Save up to 50% Off
                    </p>
                  
                  </div>
                  <div className="card-down-text">STYLISH FURNITURE</div>
                </div>
                <div>
                  <button className="button-text">SHOP NOW</button>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="right-card-part">
                <div className="right-part">
                  <div className="card-text">
                 <p>
                      Save up to 50% Off
                    </p>
                  </div>
                  <div className="card-down-text">STYLISH FURNITURE</div>
                </div>
                <div>
                  <div>
                    <div>
                      <button className="button-text">SHOP NOW</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-image">
                <img src={chairimage2} alt="" />
              </div>
            </div>
          </div>
          <div className="right-card">
            <div className="card">
              <div className="left-image">
                <img src={chairimage3} alt="" />
              </div>
              <div className="right-card-part">
                <div className="right-part">
                  <div className="card-text">
                   
                    <p>STUNNING MODERN SOFA</p>
                    
                  </div>
                </div>
                
              </div>
            </div>
            <div className="card">
              <div className="right-card-part">
                <div className="right-part">
                  <div className="card-text">
                    <p>LUXURY SOFA COLLECTION</p>
                
                  </div>
                </div>
                <div>
                  <button className="button-text">SHOP NOW</button>
                </div>
              </div>
              <div className="left-image">
                <img src={chairimage4} alt="" />
              </div>
            </div>

            <div className="card-down">
              <div className="discount-card">
                <div className="discount-border">
                  <div className="discount-content">
                    <div className="discount-title">50%</div>
                    <div className="discount-subtitle">DISCOUNT</div>
                    <div className="discount-text">ON EVERY BRAND</div>
                    <div className="discount-button">SHOP NOW</div>
                  </div>
                </div>
              </div>
              <div className="card-down-right">
                <div className="down-card-bg">
                  <div className="discount-subtitle2">TRENDY LIGHTINGS</div>
                  <div className="discount-button2">SHOP NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-section-down">
          <div className="bg-image">
            <div className="bg-color">
              <div className="quality-name">
                <div className="quality-image">
                  <img src={client1} alt="" />
                </div>
                <div className="quality-image">
                  <img src={client2} alt="" />
                </div>
                <div className="quality-image">
                  <img src={client3} alt="" />
                </div>
                <div className="quality-image">
                  <img src={client4} alt="" />
                </div>
                <div className="quality-image">
                  <img src={client5} alt="" />
                </div>
                <div className="quality-image">
                  <img src={client6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
