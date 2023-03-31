import React from "react";
import "./Filter.css";
import { Link , useLocation} from 'react-router-dom'
export default function Filter() {
  const location = useLocation();
  console.log(location.pathname);
  const [responsive, setResponsive] = React.useState(false);

  function handleToggle() {
    setResponsive(!responsive);
  }

  const buttons = [
    // { text: 'Accueil', type: 'ALL' },
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
        <Link
          to={`/`}
          className={`filter_btn ${location.pathname === '/' ? 'active' : ''}`}
          id={'Accueil'}
        >
          Accueil
        </Link>
        {buttons.map(({ text, type }) => (
          <Link
            to={`/filter/${type}`}
            key={type}
            className={`filter_btn ${location.pathname === `/filter/${type}` ? 'active' : ''}`}
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

