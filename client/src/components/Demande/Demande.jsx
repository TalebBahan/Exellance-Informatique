import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../apiSlice";
import  Message  from "../message/Message";
import emailjs from '@emailjs/browser';
import "./Demande.css";


export default function Demande() {
  const [res,setRes] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfchx1r', 'template_8mmllgl', form.current, 'qoiau_NDbiDQhpkM0')
      .then((result) => {
          // console.log(result.text);
          setRes((prev)=>!prev)
          form.current.reset();
      }, (error) => {
          // console.log(error.text);
      });
  };
  const form = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const {data,isLoading} = useGetProductsQuery()
  const datas = isLoading ? [] : data.find((product) => product.id == params.id);
  
  return (
    <div className="details_container">
    {res &&<Message />}
      <div className="details_linkBar">
        <span onClick={() => navigate(-1)} className="details_backLink">
          Revenir
        </span>
      </div>
      <div className="datails_card">
        <div className="image_box">
          <img className="card_image" src={`http://31.207.34.230/images/${datas.image}`} alt="card_image" />
          <img src="images/kg.png" alt="" className="kg_image" />
        </div>
        <div className="main_content_box">
          <span className="card_category">{datas.category}</span>

          <form className="card_information" onSubmit={(event)=>sendEmail(event)} ref={form}>

            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Nom" name="nom" id='nom' required />
              <label htmlFor="name" className="form__label">Nom</label>
            </div>
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Tel" name="tel" id='tel' required />
              <label htmlFor="tel" className="form__label">Telephone</label>
            </div>
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Email" name="email" id='email' required />
              <label htmlFor="email" className="form__label">email</label>
            </div>
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Message" name="message" id='message' required />
              <label htmlFor="message" className="form__label">message</label>
            </div>
            <input type="input" className="" hidden name="id" id='id' value={datas.id} readOnly/>
            <input type="input" className="" hidden name="cat" id='cat' value={datas.category} readOnly/>
            <input type="input" className="" hidden name="nom_" id='nom_' value={datas.title} readOnly/>
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
