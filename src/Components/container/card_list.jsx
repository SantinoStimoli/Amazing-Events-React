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
    }, []);

    const filterEvents = eventsDefined.filter(event => linkOration(event.name).includes(linkOration(text)))


    return (
        <div className='my-10'>
            <Search setText={setText} categories={categories} setCategories={setCategories} />
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
