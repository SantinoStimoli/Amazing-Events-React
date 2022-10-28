import React from 'react';
import Title from './Title';
import NotFoundImg from "../../resources/notFound.jpg";

const NotFoundComponent = () => {
    return (
        <div className='h-80vh flex justify-center items-center bg-contain bg-center bg-no-repeat my-10' style={{ backgroundImage: `url(${NotFoundImg})` }}>
        </div>
    );
}

export default NotFoundComponent;
