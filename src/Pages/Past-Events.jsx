import React from 'react';
import CardList from '../Components/container/card_list';
import Title from '../Components/pure/Title';
import { EVENT_TYPE } from '../models/eventType.enum';

const PastEvents = () => {
    return (
        <div className='container mx-auto px-2 py-2.5 sm:px-4'>
            <Title title={'Past Events'}>
                <p>Here you can see all the events that we have already organized and review the information of each one of them in a quick and simple way</p>
            </Title>
            <CardList eventType={EVENT_TYPE.PAST} />
        </div>
    );
}

export default PastEvents;
