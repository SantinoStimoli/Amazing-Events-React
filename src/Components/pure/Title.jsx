import React from 'react';
import '../../Styles/title.css'

const Title = ({ children, title }) => {
    return (
        <div className='div-title'>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default Title;
