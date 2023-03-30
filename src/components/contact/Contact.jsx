import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import './contact.css'
export default function Contact() {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lfchx1r', 'template_99ubsol', form.current, 'qoiau_NDbiDQhpkM0')
            .then((result) => {
                console.log(result.text);
                setRes(true)
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="details_container">
            <div className="details_linkBar">
                <span onClick={() => navigate(-1)} className="details_backLink">
                    <HiArrowLeft />
                    Revenir
                </span>
            </div>
            <div className="datails_card">

                <div className="main_content_box">
                    <span className="card_category">Achat@Excellence-Informatique.com<br></br>(+222) 37-37-38-17</span>
                    <form className="card_information" onSubmit={(event) => sendEmail(event)} ref={form}>
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
                        <button
                            className="card_buy"
                        >
                            Envoyer
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
