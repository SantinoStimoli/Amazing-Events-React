import React, { useEffect, useRef, useState } from 'react';
import { obtainCategories } from '../../service/obtainCategories';

const Search = ({ setText, categories, setCategories }) => {
    const inputRef = useRef('')

    useEffect(() => {
        obtainCategories(setCategories)
    }, []);

    function obtainSelectedCategories() {
        let checkboxs = document.querySelectorAll("input[type='checkbox']")
        let arrayChecboxs = Array.from(checkboxs)
        let arrayCheckeds = arrayChecboxs.filter(e => e.checked)
        let arrayCheckedsValues = arrayCheckeds.map(e => e.value)
        return arrayCheckedsValues
    }

    return (
        <div>
            <input className='rounded-xl w-1/2' onChange={() => setText(inputRef.current.value)} ref={inputRef} type={'text'} placeholder={'Search by name...'} />
            <div className='flex flex-wrap justify-center mt-3'>
                {categories.map((category, index) => (
                    <label key={index} className='select-none cursor-pointer flex items-center'>
                        <input onClick={() => obtainSelectedCategories()} className='mx-2 cursor-pointer checkboxs' type={'checkbox'} name='categories' value={category} />
                        {category}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Search;
