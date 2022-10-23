import React from 'react';
import CardList from '../Components/container/card_list';
import { EVENT_TYPE } from '../models/eventType.enum';

const PastEvents = () => {
    return (
        <div className='container mx-auto px-2 py-2.5 sm:px-4'>
            <h1>Past Events</h1>
            <CardList eventType={EVENT_TYPE.PAST} />
        </div>
    );
}

export default PastEvents;
