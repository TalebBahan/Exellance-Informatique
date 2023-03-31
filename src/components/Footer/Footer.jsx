import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillFacebook } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="text-gray-700 body-font" style={{backgroundColor: "#333"}}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-4">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 hover:text-gray-300">First Link</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-300">Second Link</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-300">Third Link</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-300">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-100 hover:text-gray-300"><AiFillFacebook /> Excellence-Informatique-Bureautique </a></li>

              <li><a className="text-gray-100 hover:text-gray-300"><RiWhatsappFill /> (+222) 37-37-38-17</a></li>

              <li><a className="text-gray-100 hover:text-gray-300"><SiGmail /> Achat@Excellence-Informatique.com</a></li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">Partenaire</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 hover:text-gray-300"><img width='80' src="/images/ses.png" /></a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-300 mr-1"><img width='80' src="/images/codan.jpg" /></a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-gray-300"><img width='80' src="/images/hp.png" /></a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />waistcoat green juice
            </p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailwind Blocks —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
        </div>
      </div>
    </footer>
  );
}
