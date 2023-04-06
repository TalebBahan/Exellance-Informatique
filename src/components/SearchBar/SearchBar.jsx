import React, { useContext, useEffect } from "react";
import "./SearchBar.css";
import { GoSearch } from "react-icons/go";
import { FilterContext, FilterDispath } from "../Context/ContextFilter";
import { useLocation } from "react-router-dom";
import { AiOutlineDesktop } from "react-icons/ai";
import { Link } from "react-router-dom";
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


  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });

  return (
    <div class="relative max-w-lg">
      <div className="searchBar_box">
        <div id="top-bar">
          <AiOutlineDesktop className='logo__serch' />
          <input className="search-bar" type="text" placeholder="Search"
            onChange={(e) => searchKeywordHandler(e)}
            value={state.searchKey}
          ></input>
          <GoSearch className='logo__serch d' />
        </div>
      </div>
      {state.searchKey && productsList.length > 0 ?
        <div class="absolute mt-2 w-full overflow-hidden rounded-md bg-white z-10">
          {productsList.map((product, index) => {
            return index<=6 ?
            <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
             <Link to={`/${product.id}`}><p class="text-sm font-medium text-gray-600">{product.category}</p></Link>
             <Link to={`/${product.id}`}><p class="text-sm text-gray-500">{product.title}</p></Link> 
            </div>
            : null
          }

          )}</div> : null
      }
    </div>
  );
}
