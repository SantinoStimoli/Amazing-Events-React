import React from 'react';
import Title from './Title';
import NotFoundImg from "../../resources/notFound.jpg";

const NotFoundComponent = () => {
    return (
        <div className='h-80vh flex justify-center items-center'>
            <Title title={'Not Found'} >
                <img src={NotFoundImg} />
            </Title>
        </div>
    );
}

export default NotFoundComponent;
