import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../assets/Images/SVG/basket-svgrepo-com (4).svg";
import icon from "../assets/Images/SVG/hamburger-md-svgrepo-com.svg";
import "../Css/Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const clickbutton = () => {
    setMobile((prev) => !prev);
  };

  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="logo">ShopApp</div>

        <div className="middle-nav">
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">
                <img className="cart-image" src={cart} alt="cart" />
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={clickbutton} className="icon-image toogle-button">
          <img src={icon} alt="menu" />
        </div>

        {mobile && (
          <div className="mobile-nav">
            <ul className="nav-ul">
              <li>
                <Link to="/" onClick={() => setMobile(false)}></Link>
              </li>
              <li>
                <Link to="/home" onClick={() => setMobile(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobile(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => setMobile(false)}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobile(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setMobile(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setMobile(false)}>
                  <img className="cart-image" src={cart} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
