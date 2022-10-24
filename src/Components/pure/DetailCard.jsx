import React from 'react';
import { moneyFormater } from '../../service/moneyFormat';

const DetailCard = ({ event }) => {

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={event.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest -mb-2 text-center">{event.category}</h2>
                        <h1 className="color-personalizado text-4xl tracking-normal font-black">{event.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center mx-auto mt-1">
                                <span className="text-gray-600">{event.date}</span>
                            </span>
                        </div>
                        <p className="text-lg text-left tracking-tighter">{event.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3"><b>Capacity:</b> {event.capacity}</span>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3"><b>{event.assistance ? 'Assistance:' : 'Estimate:'}</b> {event.assistance ? event.assistance : event.estimate}</span>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3"><b>{event.place}</b></span>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl color-personalizado">{moneyFormater(event.price)}</span>
                            <button className="rounded-full ml-auto w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailCard;
