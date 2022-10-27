import React from 'react';
import CardList from '../Components/container/card_list';
import Title from '../Components/pure/Title';
import { EVENT_TYPE } from '../models/eventType.enum';

const AllEvents = () => {
    return (
        <div className='container mx-auto'>
            <Title title={'All Events'}>
                <p>Here you can see all our events and review the information of each of them in a quick and easy way</p>
            </Title>
            <CardList eventType={EVENT_TYPE.ALL} />
        </div>
    );
}

export default AllEvents;
