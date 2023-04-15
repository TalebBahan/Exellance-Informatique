import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div key={props.id} className="box">
      <Link to={`/${props.id}`}>
        <img className="product_img" src={`http://31.207.34.230/images/${props.image}`} alt="product" loading="lazy" />
        <div className="content">
          {/* <div className="price">
            <span>{props.price.toLocaleString()+'UM'} Prix</span>
          </div> */}
        </div>
      </Link>
      <Link to={`/${props.id}`} style={{ width: '100%', color: "#333" }}>
        <div className="title">
          <span>{props.title}</span>
        </div>
        <button className="products_button buy_button">
          Acheter
          <FiShoppingCart className="buy_icon" />
        </button>
      </Link>
    </div>
  );
}
