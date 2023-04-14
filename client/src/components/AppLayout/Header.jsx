import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  // const { state } = useContext(ProductContext);
  // const { dispath } = useContext(ProductDispath);

  const location = useLocation();
  const { pathname } = location;

  // const didMount = useRef(false);
  // useEffect(() => {
  //   if (didMount.current) {
  //     setTimeout(() => {
  //       dispath({ type: "REMOVE_CLASS" });
  //     }, 1000);
  //   } else {
  //     didMount.current = true;
  //   }
  // }, [dispath, state.favorites]);

  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
          <img width={200} src='/images/logo.png' />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="ml-5 hover:text-gray-900" href="https://api.whatsapp.com/send?phone=22237373817">37 37 38 17</a>
            <a className="ml-5 hover:text-gray-900" href="https://mail.google.com/mail/u/1/?fs=1&to=Achat@Excellence-Informatique.com&tf=cm">Achat@Excellence-Informatique.com</a>
          <div className="ml-5 search_header">{pathname === "/" && <SearchBar />}</div>

        </nav>

      </div>
    </header>
  );
}

export default Header;
