import React, { useContext } from "react";

import "./Filter.css";
import { MdArrowDropDown } from 'react-icons/md'
import {Link} from 'react-router-dom'
export default function Filter() {
  
  const [activeButton, setActiveButton] = React.useState(null);
  const [responsive, setResponsive] = React.useState(false);

  function handleToggle() {
    setResponsive(!responsive);
  }

  const buttons = [
    { text: 'Accueil', type: 'ALL' },
    { text: 'PC Fix', type: 'pc_fix' },
    { text: 'Portable', type: 'portable' },
    { text: 'Imprimante', type: 'impriment' },
    { text: 'Camera', type: 'camera' },
    { text: 'Communication', type: 'cominication' },
    { text: 'Licence', type: 'licence' },
    { text: 'Reseaux', type: 'reseau' },
    { text: 'DVR', type: 'dvr' },
    { text: 'Ondileur', type: 'ondileur' },
  ];

  return (
    <div>
      <div className={`topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
        {buttons.map(({ text, type }) => (
          <Link
            to={`/filter/${type}`}
            key={type}
            onClick={() => {
              setActiveButton(type);
              
            }}
            className={`filter_btn ${activeButton === type ? 'active' : ''}`}
            id={type}
          >
            {text}
          </Link>
        ))}
        <a href="javascript:void(0);" style={{ fontSize: '20px' }} className="icon" onClick={handleToggle}>
          &#9776;
        </a>
      </div>
      {/* {activeButton === 'licence' && (
        <div className="licence">
          <img src="/images/l.jpeg" />
          <img src="/images/l1.jpeg" />
        </div>
      )} */}
    </div>
  );
}

