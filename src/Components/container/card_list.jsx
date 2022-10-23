import React, { useState } from 'react';
import { EVENT_TYPE } from '../../models/eventType.enum';
import { obtainEvents } from '../../service/obtainEvents';
import Card from '../pure/card';

const CardList = ({ eventType }) => {

    const [allEvents, setAllEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    obtainEvents().then((response) => {
        setAllEvents(response.data.events)
        setPastEvents(allEvents.filter(events => events.assistance))
        setUpcomingEvents(allEvents.filter(events => events.estimate))
    })

    const eventDefined =
        eventType === EVENT_TYPE.ALL ? allEvents :
            eventType === EVENT_TYPE.PAST ? pastEvents :
                eventType === EVENT_TYPE.UPCOMING ? upcomingEvents :
                    undefined

    return (
        <div className='flex flex-wrap justify-center'>
            {eventDefined.map((event, index) => (
                <Card key={index} event={event} />
            ))}
        </div>
    );
}


export default CardList;
