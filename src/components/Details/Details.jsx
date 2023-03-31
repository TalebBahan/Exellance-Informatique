import React, { useContext,useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext} from "../Context/ContextProvider";
import  Message  from "../message/Message";
import { HiArrowLeft } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import "./Details.css";


export default function Details() {
  const [res,setRes] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfchx1r', 'template_8mmllgl', form.current, 'qoiau_NDbiDQhpkM0')
      .then((result) => {
          console.log(result.text);
          setRes(true)
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  const form = useRef();
  const navigate = useNavigate();
  const { state } = useContext(ProductContext);
  const params = useParams();
  const datas = state.allProducts.find((product) => product.id == params.id);
  const checkBasket = state.basket.some((product) => product.id == params.id);

  return (
    <div className="details_container">
    {res &&<Message />}
      <div className="details_linkBar">
        <span onClick={() => navigate(-1)} className="details_backLink">
          <HiArrowLeft />
          Revenir
        </span>
      </div>
      <div className="datails_card">
        <div className="image_box">
          <img className="card_image" src={datas.image} alt="card_image" />
          <img src="images/kg.png" alt="" className="kg_image" />
        </div>
        <div className="main_content_box">
          <span className="card_category">{datas.category}</span>

          <form className="card_information" onSubmit={(event)=>sendEmail(event)} ref={form}>

            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Nom" name="nom" id='nom' required />
              <label htmlhtmlFor="name" class="form__label">Nom</label>
            </div>
            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Tel" name="tel" id='tel' required />
              <label htmlhtmlFor="tel" class="form__label">Telephone</label>
            </div>
            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Email" name="email" id='email' required />
              <label htmlhtmlFor="email" class="form__label">email</label>
            </div>
            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Message" name="message" id='message' required />
              <label htmlhtmlFor="message" class="form__label">message</label>
            </div>
            <input type="input" class="" hidden name="id" id='id' value={datas.id} />
            <input type="input" class="" hidden name="cat" id='cat' value={datas.category} />
            <input type="input" class="" hidden name="nom_" id='nom_' value={datas.title} />
            <button
              className="card_buy"
            >
              Demande Un Devis
            </button>
          </form>
          

        </div>
      </div>
    </div>
  );
}
