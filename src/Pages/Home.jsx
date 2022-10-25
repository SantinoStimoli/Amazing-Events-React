import React from 'react';
import CarouselHome from '../Components/pure/Carousel';
import Title from '../Components/pure/Title';

const Home = () => {
    return (
        <div className='container mx-auto px-2 sm:px-4 mt-5'>
            <CarouselHome />
            <div className='my-10'>
                <Title>
                    <h2>Welcome to the best events page.</h2>
                    <p>AMAZING EVENTS is a page where you will be able to see the information of the best events that have been and will be, you will also be able to get your ticket to participate in them with your preferred debit or credit card under our 100% secure encrypted payments</p>
                </Title>
            </div>
        </div>
    );
}

export default Home;
