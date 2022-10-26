import { Tabs } from 'flowbite-react';
import React from 'react';
import { EVENT_TYPE } from '../../models/eventType.enum';
import EventHome from './eventHome';

const EventsHome = () => {
    return (
        <div className='flex justify-center flex-wrap 2xl:flex-nowrap items-start'>
            <EventHome eventsType={EVENT_TYPE.ALL} />
            <EventHome eventsType={EVENT_TYPE.UPCOMING} />
            <EventHome eventsType={EVENT_TYPE.PAST} />
        </div>
    );
}

export default EventsHome;
