import React, { useEffect, useState } from 'react';
import { obtainEvents } from '../../service/obtainEvents';
import { obtainCategories } from '../../service/obtainCategories';
import Table from '../pure/Table';

const StatsTable = () => {

    const [maxRevenue, setMaxRevenue] = useState(0);
    const [categoryMaxRevenue, setCategoryMaxRevenue] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

    const [maxAssistance, setMaxAssistance] = useState(0);
    const [categoryMaxAssistance, setCategoryMaxAssistance] = useState(0);
    const [totalAssistance, setTotalAssistance] = useState(0);

    const [categories, setCategories] = useState([]);
    const [categoriesStats, setCategoriesStats] = useState([]);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        obtainEvents().then((response) => {
            setEvents(response.data.events)
        })
        obtainCategories(setCategories)
    }, []);

    console.log(categories, events);

    return (
        <div>
            <Table />
        </div>
    );
}

export default StatsTable;