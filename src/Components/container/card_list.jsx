import React, { useEffect, useState } from 'react';
import { obtainEvents } from '../../service/obtainEvents';
import Card from '../pure/Card';
import Search from '../pure/Search';
import { linkOration } from '../../service/linkOration';
import { EVENT_TYPE } from '../../models/eventType.enum';
import badSearch from '../../resources/badSearch.jpg'

const CardList = ({ eventType, setLoader }) => {

    const [initialEvents, setInitialEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        obtainEvents()
            .then((response) => {
                if (eventType === EVENT_TYPE.ALL) {
                    setInitialEvents(response.data.events)
                    setFiltered(response.data.events)
                }
                if (eventType === EVENT_TYPE.PAST) {
                    setInitialEvents(response.data.events.filter(events => events.assistance))
                    setFiltered(response.data.events.filter(events => events.assistance))
                }
                if (eventType === EVENT_TYPE.UPCOMING) {
                    setInitialEvents(response.data.events.filter(events => events.estimate))
                    setFiltered(response.data.events.filter(events => events.estimate))
                }
            })
    }, []);

    function obtainSelectedCategories() {
        let checkboxs = document.querySelectorAll("input[type='checkbox']")
        let arrayChecboxs = Array.from(checkboxs)
        let arrayCheckeds = arrayChecboxs.filter(checkbox => checkbox.checked)
        let arrayCheckedsValues = arrayCheckeds.map(checkbox => checkbox.value)
        let arrayFiltrado = initialEvents.filter(e => arrayCheckedsValues.includes(e.category))
        if (arrayFiltrado.length === 0) {
            setFiltered(initialEvents);
        } else {
            setFiltered(arrayFiltrado);
        }
    }

    const filterEvents = filtered.filter(event => linkOration(event.name).includes(linkOration(text)))

    return (
        <div className='my-10'>
            <Search setText={setText} categories={categories} setCategories={setCategories} obtainSelectedCategories={obtainSelectedCategories} />
            <div className='flex flex-wrap justify-center mt-5'>

                {
                    filterEvents.length === 0 ?
                        <div className='my-10 flex justify-center flex-col '>
                            <h2 className='text-3xl max-md:text-2xl px-4 mb-4'>There are no posts matching your search</h2>
                            <img className='w-3/5 mx-auto' src={badSearch} />
                        </div> :
                        filterEvents.map((event, index) => (
                            <Card key={index} event={event} />
                        ))
                }


            </div>
        </div>
    );
}

export default CardList;
