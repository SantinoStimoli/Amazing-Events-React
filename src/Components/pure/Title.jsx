import React from 'react';
import '../../Styles/title.css'

const Title = ({ children, title }) => {
    return (
        <div className=' lg:mx-40 sm:mx-10 mx-0 my-6'>
            <h1 className='text-center leading-none max-sm:text-5xl'>{title}</h1>
            {children}
        </div>
    );
}

export default Title;