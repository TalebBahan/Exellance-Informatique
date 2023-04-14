import React, { useState } from "react";
import "./SearchBar.css";
import { GoSearch } from "react-icons/go";
import { AiOutlineDesktop } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../apiSlice";

export default function SearchBar() {

  const [key, setKey] = useState('')
  const { data, isLoading } = useGetProductsQuery();
  const serch = () => {
    return data.filter((product) => {
      return product.title.toLowerCase().includes(key);
    });
  }

  return (
    <div className="relative max-w-lg">
      <div className="searchBar_box">
        <div id="top-bar">
          <AiOutlineDesktop className='logo__serch' />
          <input className="search-bar" type="text" placeholder="Search"
            onChange={(e) => setKey(e.target.value)}
            value={key}
          ></input>
          <GoSearch className='logo__serch d' />
        </div>
      </div>
      {!isLoading && key.length > 0 ?
        <div className="absolute mt-2 w-full overflow-hidden rounded-md bg-white z-10">
          {serch().map((product, index) => {
            return index <= 6 ?
              <div className="cursor-pointer py-2 px-3 hover:bg-slate-100" key={product.id}>
                <Link to={`/${product.id}`}><p className="text-sm font-medium text-gray-600">{product.category}</p></Link>
                <Link to={`/${product.id}`}><p className="text-sm text-gray-500">{product.title}</p></Link>
              </div>
              : null
          }
          )}</div> : null
      }
    </div>
  );
}
