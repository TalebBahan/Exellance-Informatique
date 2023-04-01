import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
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
        <form className="container px-5 py-24 mx-auto flex" onSubmit={(event) => sendEmail(event)} ref={form}>
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contactez nous</h2>
                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Nom" type="text" name="nom" id='nom' required />
                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" name="tel" id='tel' required />
                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Numero Tel" type="number" name="email" id='email' required />
                <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" name="message" id='message' required></textarea>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Envoyer</button>
            </div>
        </form>
    )
}
