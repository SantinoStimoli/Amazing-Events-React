import React, { useEffect, useRef } from 'react';
import { obtainCategories } from '../../service/obtainCategories';

const Search = ({ setText, categories, setCategories, obtainSelectedCategories }) => {
    const inputRef = useRef('')

    useEffect(() => {
        obtainCategories(setCategories)
    }, []);

    return (
        <div>
            <input className='rounded-xl w-1/2' onChange={() => setText(inputRef.current.value)} ref={inputRef} type={'text'} />
            <div className='flex flex-wrap justify-center mt-3 px-2'>
                {categories.map((category, index) => (
                    <label key={index} className='select-none cursor-pointer flex items-center max-sm:text-xs max-sm:my-1'>
                        <label className="contenedor">
                            <input onChange={() => obtainSelectedCategories()} type="checkbox" name='categories' value={category} />
                            <div className="checkmark"></div>
                        </label>
                        {category}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Search;
