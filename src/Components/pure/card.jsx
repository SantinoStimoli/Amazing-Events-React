import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ event }) => {
    return (
        <div class="max-w-sm bg-white rounded-lg borde shadow-md">
            <img class="rounded-t-lg w-full" src={event.image} alt={`${event.name}_picture`} />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{event.name}</h5>
                <p>{event.price}</p>
                <p>{event.category}</p>
                <p>{event.date}</p>
                <Link to={`/events/${event._id}`} class="inline-flex items-center text-blue-600 hover:underline">
                    View more
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </Link>
            </div>
        </div>
    );
}

export default Card;