import React, { useEffect, useRef, useState } from 'react';
import { obtainCategories } from '../../service/obtainCategories';

const Search = ({ setText, categories, setCategories, obtainSelectedCategories }) => {
    const inputRef = useRef('')

    useEffect(() => {
        obtainCategories(setCategories)
    }, []);

    return (
        <div>
            <input className='rounded-xl w-1/2' onChange={() => setText(inputRef.current.value)} ref={inputRef} type={'text'} />
            <div className='flex flex-wrap justify-center mt-3'>
                {categories.map((category, index) => (
                    <label key={index} className='select-none cursor-pointer flex items-center'>
                        <input onChange={() => obtainSelectedCategories()} className='mx-2 cursor-pointer checkboxs' type={'checkbox'} name='categories' value={category} />
                        {category}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Search;
