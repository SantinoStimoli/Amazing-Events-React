import React from 'react';

const ContactForm = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex lg:flex-nowrap flex-wrap-reverse">
                <div className=" lg:w-1/2 bg-gray-300 rounded-lg overflow-hidden lg:mr-10 p-10 flex items-end justify-start relative -z-10 xl:w-1/3 sm:w-2/3 w-full mx-auto mt-10 lg:mt-0 ">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52490.9258918925!2d-58.59891528722984!3d-34.68795259191417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc622f9709805%3A0xb5f373c7721a50a5!2sSan%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1666630511868!5m2!1ses-419!2sar"></iframe>
                    <div className="bg-white bg-opacity-80 relative flex flex-wrap py-6 rounded shadow-md justify-center w-2/3 m-auto flex-col items-center ">
                        <div className="lg:w-1/">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Buenos Aires,</p>
                        </div>
                        <div className="lg:w-full mt-4 lg:mt-0 text-center">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href='mailto:santinostimoli@gmail.com' className="text-indigo-500 leading-relaxed">santinostimoli@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a href='tel:1134310411' className="text-indigo-500 leading-relaxed">+54 11 3431-0411</a>
                        </div>
                    </div>
                </div>
                <div className=" z-0 bg-white rounded-lg p-8 flex flex-col shadow-xl sm:mx-auto xl:w-1/3 sm:w-full w-full">
                    <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Leave us your email and a brief message with what you want in this small form</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email:</label>
                        <input required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focused-border focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message:</label>
                        <textarea required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focused-border focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="button-form-contact transition-all text-white border-0 py-2 px-6 focus:outline-none hover:opacity-100 rounded text-lg cursor-pointer">Send message</button>
                    <p className="text-xs text-gray-500 mt-3">Within 2 or 3 days you will receive our response in your email box</p>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;