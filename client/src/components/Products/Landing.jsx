import React from 'react'
import Contact from '../AppLayout/Contact'
import { Link } from 'react-router-dom'
export default function Landing() {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Bienvenue chez
                            <br className=" " /><span className='text-indigo-500'>Excellence Informatique </span>
                        </h1>
                        <p className="mb-8  leading-relaxed">Nous sommes une entreprise de services informatiques dédiés aux entreprises. Nous agissons dans les domaines de la fourniture, de l’installation, de la maintenance, de la sécurisation, et de la conception de votre système informatique. Nous pouvons vous offrir ainsi un suivi de votre parc informatique et une maîtrise parfaite de vos réseaux afin d’optimiser votre stratégie d’entreprise.</p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="./images/5MP-removebg-preview.png" />

                    </div>
                </div>
            </section>
            <section className="text-gray-700 body-font border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="/images/HP_Elite_x2_1013_5d1f5205d8e9f.png" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Portable</h2>
                                <p className="leading-relaxed text-base">Les processeurs i3, i5, i7 et i9 sont disponibles dans toutes les générations.</p>
                                <Link className="mt-3 text-indigo-500 inline-flex items-center" to={'/filter/portable'} onClick={()=>window.scrollTo(0, 0)}>Savoir Plus
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">

                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Licence</h2>
                                <p className="leading-relaxed text-base">es licences Office 2016, Office 2019 et Office 2021 sont disponibles.</p>
                                <Link className="mt-3 text-indigo-500 inline-flex items-center" to={'/filter/licence'} onClick={()=>window.scrollTo(0, 0)}>Savoir Plus
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">

                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">PC fix</h2>
                                <p className="leading-relaxed text-base">Le PC fixe est équipé d'un SSD ou d'un HDD, avec 8 Go, 16 Go ou 32 Go de RAM.</p>
                                <Link className="mt-3 text-indigo-500 inline-flex items-center" to={'/filter/pc_fix'} onClick={()=>window.scrollTo(0, 0)}>Savoir Plus
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Equipe commerciale Et
                            <br className="hidden lg:inline-block " /><span className='text-indigo-500'>Matériel informatique</span>
                        </h1>
                        <p className="mb-8 leading-relaxed">Nous vous proposons à la vente tout type de matériel informatique. Notre équipe commerciale saura vous conseiller afin de définir vos besoins et vous proposer des produits fiables et performants.

                            Nos experts techniques prendront également en charge tous les dépannages informatiques ainsi que les installations de logiciels, vous assurant ainsi service après-vente efficace et réactif.

                            Ils pourront également vous accompagner dans votre développement informatique au travers des infogérances et des contrats de maintenance.</p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="./images/canon-3010b-printer3-removebg-preview.png" />

                    </div>
                    
                </div>
            </section>


            <section className="text-gray-700 body-font relative">
                <div className="absolute inset-1 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.0378915526332!2d-15.9796196!3d18.0897733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe964d7a301222fd%3A0x437f4b9164463d76!2sIMMEUBLE%20NEJAAH!5e0!3m2!1sen!2s!4v1680283655757!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Contact />
            </section>

            {/* <a href="https://github.com/mertJF/tailblocks" className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg></a> */}
        </div>
    )
}
