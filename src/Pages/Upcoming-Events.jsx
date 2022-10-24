import React from 'react';
import CardList from '../Components/container/card_list';
import Title from '../Components/pure/Title';
import { EVENT_TYPE } from '../models/eventType.enum';

const UpcomingEvents = () => {
    return (
        <div className='container mx-auto px-2 py-2.5 sm:px-4'>
            <Title title={'Upcoming Events'}>
                <p>Here you can see our upcoming events and review the information of each of them in a quick and easy way</p>
            </Title>
            <CardList eventType={EVENT_TYPE.UPCOMING} />
        </div>
    );
}

export default UpcomingEvents;
