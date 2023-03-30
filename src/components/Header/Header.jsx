import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  // Get location for hide & show SearchBar Component
  const location = useLocation();
  const { pathname } = location;

  // run only if state changes and Not Mount
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="logo">
          <img src='/images/logo.png' />
        </Link>
        <div className="search_header">{pathname === "/" && <SearchBar />}</div>
        <div className="icon_Sopping_box">
          
        <Link to={"/contact"} className="logo"><AiOutlinePhone className="location_icon" style={{ color: "#5c96ca"}} /></Link>
              <a href="https://www.google.com/maps/place/IMMEUBLE+NEJAAH/@18.0897733,-15.9796196,21z/data=!4m10!1m2!2m1!1ssiege+immeuble+nejah!3m6!1s0xe964d7a301222fd:0x437f4b9164463d76!8m2!3d18.0897862!4d-15.9794417!15sChRzaWVnZSBpbW1ldWJsZSBuZWphaJIBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2Vz4AEA!16s%2Fg%2F11f54sqc9b"><GoLocation className="location_icon" style={{ color: "#5c96ca"}}  /></a>
          
          {/* <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link> */}
          {/* <Link
            to={"/favorite"}
            className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
          >
            <BsFillBookmarkHeartFill className="mark_icon" />
            {state.favorites.length > 0 && (
              <span className="badge_mark">{state.favorites.length}</span>
            )}
          </Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
