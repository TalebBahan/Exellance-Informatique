import React, { useContext, useEffect, useRef } from "react";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);

  const location = useLocation();
  const { pathname } = location;

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
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
          <img width={180} src='/images/logo.png' />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="search_header">{pathname === "/" && <SearchBar />}</div>
        </nav>

      </div>
    </header>
  );
}

export default Header;
