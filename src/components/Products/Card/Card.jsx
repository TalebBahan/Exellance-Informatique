import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductContext, ProductDispath } from "../../Context/ContextProvider";


export default function Card(props) {
  const { dispath } = useContext(ProductDispath);
  const { state } = useContext(ProductContext);

  const datas = state.allProducts.find((product) => product.id === props.id);
  const checkBasket = state.basket.some((product) => product.id === props.id);

  return (
    <div key={props.id} className="box">
      
      <Link to={`/${props.id}`}>
        <img className="product_img" src={props.image} alt="product" loading="lazy" />
        <div className="content">
          
          {/* <div className="price">
            <span>{props.price.toLocaleString()+'UM'} Prix</span>
          </div> */}
        </div>
      </Link>
      
    
        <Link to={`/${props.id}`}  style={{width:'100%',color:"#333"}}>
        <div className="title">
            <span>{props.title}</span>
          </div>
        <button
          // onClick={() => dispath({ type: "ADD_TO_BASKET", payload: props.id })}
          className="products_button buy_button"
        >
          Acheter
          <FiShoppingCart className="buy_icon" />
        </button>
        </Link>
  
      
    </div>
  );
}
