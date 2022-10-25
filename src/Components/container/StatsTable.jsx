import React, { useEffect, useState } from 'react';
import { obtainEvents } from '../../service/obtainEvents';
import { obtainCategories } from '../../service/obtainCategories';
import Table from '../pure/Table';

const StatsTable = () => {

    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [food, setFood] = useState([]);
    // const [museum, setMuseum] = useState([]);
    // const [party, setParty] = useState([]);
    // const [music, setMusic] = useState([]);
    // const [race, setRace] = useState([]);
    // const [book, setBook] = useState([]);
    // const [cinema, setCinema] = useState([]);

    useEffect(() => {
        obtainEvents().then((response) => {
            setEvents(response.data.events)
        })
        obtainCategories(setCategories)
    }, []);


    function obtainMaxAssistance() {
        let total = 0;
        let categoryOfTotal = '';
        let innerText = ''

        categories.forEach(category => {
            let filtrado = events.filter(event => event.category === category)
            let totalToCompare = 0;

            filtrado.forEach(event => {
                totalToCompare = totalToCompare + parseInt(event.assistance ? event.assistance : event.estimate)
                return totalToCompare
            })

            if (total < totalToCompare) {
                total = totalToCompare
                categoryOfTotal = category
            }
            innerText = categoryOfTotal + ': ' + total
            return innerText
        })

        return innerText
    }

    function obtainTotalAssistance() {
        let allAssistance = 0;

        categories.forEach(category => {
            let filtrado = events.filter(event => event.category === category)
            let totalAssistance = 0;

            filtrado.forEach(event => {
                totalAssistance = totalAssistance + parseInt(event.assistance ? event.assistance : event.estimate)
                return totalAssistance
            })
            allAssistance = allAssistance + totalAssistance

            return allAssistance
        })

        return allAssistance
    }

    function obtainMaxRevenue() {
        let total = 0;
        let categoryOfTotal = '';
        let innerText = ''

        categories.forEach(category => {
            let filtrado = events.filter(event => event.category === category)
            let totalToCompare = 0;
            filtrado.forEach(event => {
                totalToCompare = totalToCompare + parseInt((event.assistance ? event.assistance : event.estimate) * event.price)
                return totalToCompare
            })

            if (total < totalToCompare) {
                total = totalToCompare
                categoryOfTotal = category
            }
            innerText = categoryOfTotal + ': ' + total
            return innerText
        })
        return innerText
    }

    function obtainTotalRevenue() {
        let allRevenue = 0;

        categories.forEach(category => {
            let filtrado = events.filter(event => event.category === category)
            let totalRevenue = 0;

            filtrado.forEach(event => {
                totalRevenue = totalRevenue + parseInt((event.assistance ? event.assistance : event.estimate) * event.price)
                return totalRevenue
            })
            allRevenue = allRevenue + totalRevenue

            return allRevenue
        })

        return allRevenue
    }


    return (
        <div>
            <Table maxAssistance={obtainMaxAssistance()} maxRevenue={obtainMaxRevenue()} totalAssistance={obtainTotalAssistance()} totalRevenue={obtainTotalRevenue()} />
        </div>
    );
}

export default StatsTable;