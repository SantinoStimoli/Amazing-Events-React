import React from 'react';
import '../../Styles/title.css'

const Title = ({ children, title }) => {
    return (
        <div className='div-title lg:mx-40 sm:mx-10 mx-0'>
            <h1 className='text-center leading-none'>{title}</h1>
            {children}
        </div>
    );
}

export default Title;