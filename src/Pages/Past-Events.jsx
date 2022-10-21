
import React, { useState } from 'react';
import Card from '../Components/pure/card';
import { obtainEvents } from '../service/obtainEvents';

const PastEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    obtainEvents().then((response) => {
        setAllEvents(response.data.events)
        setPastEvents(allEvents.filter(events => events.assistance))
    })

    return (
        <div className='container mx-auto px-2 py-2.5 sm:px-4'>
            <h1>Past Events</h1>

            <div className='flex flex-wrap justify-center'>
                {pastEvents.map((event, index) => (
                    <Card key={index} event={event} />
                ))}
            </div>

        </div>
    );
}

export default PastEvents;
