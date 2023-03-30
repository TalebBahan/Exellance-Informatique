import React, { useContext, useEffect } from "react";
import "./SearchBar.css";
import { GoSearch } from "react-icons/go";
import { FilterContext, FilterDispath } from "../Context/ContextFilter";
import { useLocation } from "react-router-dom";
import { AiOutlineDesktop } from "react-icons/ai";
export default function SearchBar() {
  const { state } = useContext(FilterContext);
  const { dispath } = useContext(FilterDispath);

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    dispath({ type: "SEARCH_KEYWORD", payload: "" });
  }, [pathname]);

  const searchKeywordHandler = (e) => {
    dispath({ type: "SEARCH_KEYWORD", payload: e.target.value });
  };
  return (
    <div className="searchBar_box">
      <div id="top-bar">
        <AiOutlineDesktop className='logo__serch'/>
        <input className="search-bar" type="text" placeholder="Search"
         onChange={(e) => searchKeywordHandler(e)}
          value={state.searchKey}
        ></input>
        {/* <button className="account-button" type="button"> */}
          <GoSearch className='logo__serch d'/>
        {/* </button> */}
      </div>
    </div>
  );
}
