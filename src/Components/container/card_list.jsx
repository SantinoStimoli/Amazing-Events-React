import React, { useEffect, useState } from 'react';
import { obtainEvents } from '../../service/obtainEvents';
import Card from '../pure/Card';
import Search from '../pure/Search';
import { linkOration } from '../../service/linkOration';

const CardList = ({ eventType }) => {

    const [allEvents, setAllEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [text, setText] = useState('');
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const eventsDefined =
        eventType === 'Past' ? pastEvents :
            eventType === 'All' ? allEvents :
                upcomingEvents

    useEffect(() => {
        obtainEvents().then((response) => {
            setAllEvents(response.data.events)
            setPastEvents(allEvents.filter(events => events.assistance))
            setUpcomingEvents(allEvents.filter(events => events.estimate))
        })

        eventType === 'All' ? setFiltered(allEvents) :
            eventType === 'Past' ? setFiltered(pastEvents) :
                setFiltered(upcomingEvents)
    }, []);

    const filterEvents = filtered.filter(event => linkOration(event.name).includes(linkOration(text)))

    function obtainSelectedCategories() {
        let checkboxs = document.querySelectorAll("input[type='checkbox']")
        let arrayChecboxs = Array.from(checkboxs)
        let arrayCheckeds = arrayChecboxs.filter(checkbox => checkbox.checked)
        let arrayCheckedsValues = arrayCheckeds.map(checkbox => checkbox.value)
        let arrayFiltrado = eventsDefined.filter(e => arrayCheckedsValues.includes(e.category))
        if (arrayFiltrado.length === 0) {
            setFiltered(eventsDefined);
        } else {
            setFiltered(arrayFiltrado);
        }
    }

    return (
        <div className='my-10'>
            <Search setText={setText} categories={categories} setCategories={setCategories} obtainSelectedCategories={obtainSelectedCategories} />
            <div className='flex flex-wrap justify-center mt-5'>

                {
                    filterEvents.length === 0 ?
                        <p>There are no posts matching your search</p> :
                        filterEvents.map((event, index) => (
                            <Card key={index} event={event} />
                        ))
                }


            </div>
        </div>
    );
}


export default CardList;
