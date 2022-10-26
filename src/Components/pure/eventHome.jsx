import React from 'react';
import { EVENT_TYPE } from '../../models/eventType.enum';
import all from '../../resources/all.jpg'
import upcoming from '../../resources/upcoming.jpg'
import past from '../../resources/past.jpg'
import { Link } from 'react-router-dom';

const EventHome = ({ eventsType }) => {
    return (
        <div className='flex items-center flex-col justify-center my-5 '>
            <img className='rounded-xl w-72 lg:w-50 h-auto mb-5' src={eventsType === EVENT_TYPE.ALL ? all : eventsType === EVENT_TYPE.UPCOMING ? upcoming : past} />
            <div>
                <p className='w-80 tracking-tighter mx-20 mb-5 text-xs sm:text-lg px-5'>{eventsType === EVENT_TYPE.ALL ? 'See all our events and you will realize what we are capable of in our organization' : eventsType === EVENT_TYPE.UPCOMING ? 'You are still on time, look at all the events that are coming and check all your information to be able to participate in them' : 'See all the events that we have already organized and you will realize that the best known names went through amazing events'}</p>
                <Link to={eventsType === EVENT_TYPE.ALL ? '/events' : eventsType === EVENT_TYPE.UPCOMING ? '/events/upcoming' : '/events/past'} type="button" className="bg-personalizado focus:outline-none text-white  opacity-80 hover:opacity-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">View more...</Link>
            </div>
        </div>
    );
}

export default EventHome;
