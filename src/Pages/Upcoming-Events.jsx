import React, { useState } from 'react';
import Card from '../Components/pure/card';
import { obtainEvents } from '../service/obtainEvents';

const UpcomingEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    obtainEvents().then((response) => {
        setAllEvents(response.data.events)
        setUpcomingEvents(allEvents.filter(events => events.estimate))
    })
    return (
        <div className='flex flex-wrap justify-center'>
            {upcomingEvents.map((event, index) => (
                <Card key={index} event={event} />
            ))}
        </div>
    );
}

export default UpcomingEvents;
