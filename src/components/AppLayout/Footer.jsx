import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="text-gray-700 body-font" style={{ backgroundColor: "#333" }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-4">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/filter/pc_fix'}   onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">PC Fix</Link>
              </li>
              <li>
                <Link to={'/filter/portable'} onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">Portable</Link>
              </li>
              <li>
                <Link to={'/filter/impriment'}  onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">Imprimante</Link>
              </li>
              <li>
                <Link to={'/filter/cominication'} onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">Communication</Link>
              </li>
              <li>
                <Link to={'/filter/licence'}  onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">Licence</Link>
              </li>
              <li>
                <Link to={'/filter/reseau'} onClick={()=>window.scrollTo(0, 0)} className="text-gray-100 hover:text-gray-300">Reseaux</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-100 hover:text-gray-300" href="https://web.facebook.com/exellenceinformatique/posts/1692553817582198?_rdc=1&_rdr">  Excellence-Informatique-Bureautique </a>
              </li>

              <li>
                <a className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" viewBox="0 0 20 20" version="1.1">
                    <title>whatsapp [#128]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="rgb(107 114 128)">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">

                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a className="text-gray-100 hover:text-gray-300">  (+222) 37-37-38-17</a>
              </li>

              <li>
                <a className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(107 114 128)" width="15px" viewBox="0 0 32 32" version="1.1">
                    <title>gmail</title>
                    <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" />
                  </svg>
                </a>
                <a className="text-gray-100 hover:text-gray-300">  Achat@Excellence-Informatique.com</a></li>
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
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Excellence Informatique

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
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Taleb Bahan — The Developper
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@talebbahan@gmail.com</a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">React js and tailwindcss and Frontend Developper</span>
        </div>
      </div>
    </footer>
  );
}
