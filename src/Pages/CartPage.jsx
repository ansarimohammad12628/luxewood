import React from "react";
import { useDispatch, useSelector } from "react-redux";

import icon1 from "../assets/Images/SVG/heart-fill-svgrepo-com.svg";
import icon2 from "../assets/Images/SVG/eye-svgrepo-com.svg";
import icon3 from "../assets/Images/SVG/refresh-reverse-svgrepo-com.svg";
import icon4 from "../assets/Images/SVG/basket-svgrepo-com (4).svg";
import { removecart } from "../Feature/userSlice";

const CartPage = () => {
  const data = useSelector((state) => state.users.item);
  console.log("Data:", data);

  const dispatch = useDispatch();
  return (
    <>

          <div className="bg-banner">
        <div className="bg-bannercolor">
          <div className="main-text">CART</div>
        </div>
      </div>
      <div className="section-product">
        {data.map((val, index) => (
          <div key={index} className="main-product-card">
            <div className="product-card">
              <div className="product-img">
                <img src={val.image} alt="Wooden Chair" />
                <div className="top-button">
                  <span className="badge">NEW</span>
                  {val.discount && <span className="badge2">20%</span>}
                </div>
              </div>
              <div className="product-overlay">
                <button
                  className="add-to-cart"
                  onClick={() => dispatch(removecart(val.cartId))}
                >
                  <img src={icon4} alt="" />
                  <div className="text">REMOVE CART</div>
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
            <h3 className="product-title">{val.title}</h3>
            <p className="price">${val.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
