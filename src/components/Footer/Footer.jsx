import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { RiWhatsappFill } from "react-icons/ri";
import {AiFillFacebook} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    

  <footer>

  <div className="row">

    <div className="column">

      <h4>Qui sommes-nous</h4>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus euismod, faucibus metus ut, semper nibh. Aenean euismod justo eu enim dapibus suscipit.</p>

    </div>

    <div className="column">

      <h4>Contactez nous</h4>

      <ul>

        <li><a href="#"><AiFillFacebook style={{color:'#4267B2',marginRight:'4px'}}/> Excellence-Informatique-Bureautique </a></li>

        <li><a href="#"><RiWhatsappFill  style={{color:'#128C7E',marginRight:'4px'}}/> (+222) 37-37-38-17</a></li>

        <li><a href="#"><SiGmail style={{color:'#c71610',marginRight:'4px'}}/> Achat@Excellence-Informatique.com</a></li>

      </ul>

    </div>

   
    <div className="column">

      <h4>Partenaire</h4>

      <ul>

        <li><a href="#"><img width='100'src="/images/ses.png"/></a></li>

        <li><a href="#" style={{marginRight:'8px'}}><img width='100'src="/images/codan.jpg"/></a><a href="#"><img width='100'src="/images/hp.png"/></a></li>

        <li></li>

      </ul>

    </div>

  </div>

  <p className="copyright">© 2023 All Rights Reserved</p>

</footer>


  );
}
