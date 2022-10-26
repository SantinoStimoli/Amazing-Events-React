import React from 'react';
import CarouselHome from '../Components/pure/Carousel';
import EndHome from '../Components/pure/endHome';
import EventsHome from '../Components/pure/eventsHome';
import Title from '../Components/pure/Title';

const Home = () => {
    return (
        <div className='container mx-auto px-2 sm:px-4'>
            <CarouselHome />
            <div className='sm:mt-16 mt-3 mb-8 px-5'>
                <Title>
                    <h1 className='sm:text-5xl text-4xl'>Welcome to Amazing Events.</h1>
                    <p className='tracking-tighter mt-2 lg:w-4/5 sm:text-lg text-xs'>AMAZING EVENTS is a page where you will be able to see the information of the best events that have been and will be, you will also be able to get your ticket to participate in them with your preferred debit or credit card under our 100% secure encrypted payments</p>
                </Title>
            </div>
            <EventsHome />
            <EndHome />
        </div>
    );
}

export default Home;
