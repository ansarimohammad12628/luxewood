import React, { useState } from "react";

import "../Css/ProductPage.css";
import "animate.css";

import badimage from "../assets/Images/PNG/slider-2.png";
import product1 from "../assets/Images/JPG/product-1.jpg";
import chairimage2 from "../assets/Images/png/ad-banner-5.png";
import product2 from "../assets/Images/JPG/product-2.jpg";
import product3 from "../assets/Images/JPG/product-3.jpg";
import product4 from "../assets/Images/JPG/product-6.jpg";
import product5 from "../assets/Images/JPG/product-9.jpg";
import product6 from "../assets/Images/JPG/product-10.jpg";
import product7 from "../assets/Images/JPG/product-4.jpg";
import icon1 from "../assets/Images/SVG/heart-fill-svgrepo-com.svg";
import icon2 from "../assets/Images/SVG/eye-svgrepo-com.svg";
import icon3 from "../assets/Images/SVG/refresh-reverse-svgrepo-com.svg";
import icon4 from "../assets/Images/SVG/basket-svgrepo-com (4).svg";
import icon5 from "../assets/Images/SVG/check-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../Feature/userSlice";

const carddata = [
  {
    id: 1,
    image: product5,
    title: "WOODEN CHAIR",
    price: "15.00",
    discount: false,
  },
  {
    id: 2,
    image: product6,
    title: "WOODEN ICEZ  CHAIR",
    price: "15.00",
    discount: true,
  },
  {
    id: 3,
    image: chairimage2,
    title: "OFFICE CHAIRS",
    price: "15.00",
    discount: true,
  },
  {
    id: 4,
    image: product1,
    title: "PLATIC NER CHAIRS",
    price: "15.00",
    discount: true,
  },
  {
    id: 5,
    image: product2,
    title: "OFFICAL CHAIRS",
    price: "15.00",
    discount: true,
  },
  {
    id: 6,
    image: product3,
    title: "LUXURY CHAIRS",
    price: "15.00",
    discount: true,
  },
  {
    id: 7,
    image: product4,
    title: "WOODEN ICEZ CHAIR",
    price: "15.00",
    discount: true,
  },
  {
    id: 8,
    image: product7,
    title: "WOODEN ICEZ CHAIR",
    price: "15.00",
    discount: true,
  },
];

const ProductPage = () => {
  const cartdata = useSelector((state) => state.users.item);

  const dispatch = useDispatch();
  return (
    <>
      <div className="section">
        <div className="top-text">Give Us Something To Assemble</div>
        <div className="para">
          <p>
            I never thought I could feel so free! Well we're movin' on up to the
            east side to a deluxe apartment in the sky
          </p>
          <p>just two good ol' boys Never meanin.</p>
        </div>

        <div className="sofa">
          <img src={badimage} alt="" />
        </div>
      </div>
      <div className="section-product ">
        {carddata.map((value, index) => {
          const isInCart = cartdata.some((item) => item.id === value.id);

          return (
            <div key={index} className="main-product-card">
              <div className="product-card">
                <div className="product-img">
                  <img src={value.image} alt="Wooden Chair" />
                  <div className="top-button">
                    <span className="badge">NEW</span>
                    {value.discount && <span className="badge2">20%</span>}
                  </div>
                </div>
                <div className="product-overlay">
                  <button
                    className="add-to-cart"
                    onClick={() => dispatch(addtocart(value))}
                    disabled={isInCart}
                  >
                    <img src={isInCart ? icon5 : icon4} alt="" />
                    <div className="text">
                      {isInCart ? "ADDED TO CART" : "ADD TO CART"}
                    </div>
                  </button>
                  <div className="icon-group">
                    <div className="icon">
                      <img src={icon1} alt="" />
                    </div>
                    <div className="icon">
                      <img src={icon2} alt="" />
                    </div>
                    <div className="icon">
                      <img src={icon3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="product-title">{value.title}</h3>
              <p className="price">${value.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
