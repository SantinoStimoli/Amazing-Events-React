import React, { useEffect, useState } from 'react';
import { obtainEvents } from '../../service/obtainEvents';
import { obtainCategories } from '../../service/obtainCategories';
import Table from '../pure/Table';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';

const StatsTable = () => {

    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);

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
            innerText = categoryOfTotal + ': ' + numberFormater(total)
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

    function obtainEventMaxAssistance() {
        let total = 0;
        let innerText = ''
        let totalToCompare = 0;

        events.forEach(event => {
            totalToCompare = parseInt(event.assistance ? event.assistance : event.estimate)

            if (total < totalToCompare) {
                total = totalToCompare
                innerText = event.name + ': ' + numberFormater(total)
            }

            return innerText
        })

        return innerText
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
            innerText = categoryOfTotal + ': ' + moneyFormater(total)
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

    function obtainEventMaxRevenue() {
        let total = 0;
        let innerText = ''
        let totalToCompare = 0;

        events.forEach(event => {
            totalToCompare = parseInt((event.assistance ? event.assistance : event.estimate) * event.price)

            if (total < totalToCompare) {
                total = totalToCompare
                innerText = event.name + ': ' + moneyFormater(total)
            }

            return innerText
        })

        return innerText
    }

    function obtainCategoriesStats(category) {
        let assistance = 0;
        let pastEvents = 0;
        let estimate = 0;
        let upcomingEvents = 0;
        let revenues = 0;
        let filtrado = events.filter(event => event.category === category)


        filtrado.forEach(event => {
            let sumarAssistance = event.assistance === undefined ? 0 : parseInt(event.assistance)
            assistance = assistance + sumarAssistance
            pastEvents = pastEvents + (sumarAssistance === 0 ? 0 : 1)

            let sumarEstimate = event.assistance === undefined ? parseInt(event.estimate) : 0
            estimate = estimate + sumarEstimate
            upcomingEvents = upcomingEvents + (sumarEstimate === 0 ? 0 : 1)

            let sumarRevenues = event.assistance ? (parseInt(event.assistance) * event.price) : (parseInt(event.estimate) * event.price)
            revenues = revenues + sumarRevenues
            return assistance, estimate, revenues, pastEvents
        })

        let response = {
            category: category,
            pastEvents: pastEvents,
            assistance: assistance,
            upcomingEvents: upcomingEvents,
            estimate: estimate,
            revenues: revenues,
        }

        return response
    }

    return (
        <div>
            <Table maxAssistance={obtainMaxAssistance()} maxRevenue={obtainMaxRevenue()} totalAssistance={obtainTotalAssistance()} totalRevenue={obtainTotalRevenue()} eventMaxAssistance={obtainEventMaxAssistance()} eventMaxRevenue={obtainEventMaxRevenue()} obtainCategoriesStats={obtainCategoriesStats} categories={categories} />
        </div>
    );
}

export default StatsTable;