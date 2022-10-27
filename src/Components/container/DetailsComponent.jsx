import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { obtainEvents } from '../../service/obtainEvents';
import DetailCard from '../pure/DetailCard';

const DetailsComponent = () => {
    const { id } = useParams()
    const [event, setEvent] = useState([]);

    obtainEvents().then((response) => {
        let allEvents = response.data.events
        let event = allEvents.filter(event => event._id === id)[0]
        setEvent(event)
    })

    return (
        <div className='container mx-auto px-2 py-2.5 sm:px-4'>
            <DetailCard event={event} />
        </div>
    );
}

export default DetailsComponent;
