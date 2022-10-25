import React from 'react';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';
import '../../Styles/table.css'
import TableCategory from './TableCategory';

const Table = ({ maxAssistance, maxRevenue, totalAssistance, totalRevenue, eventMaxAssistance, eventMaxRevenue, obtainCategoriesStats, categories }) => {

    return (
        <div>
            <section>
                <h2>General Stats</h2>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2}>All assistance</td>
                            <td colSpan={2}>All revenues</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>{numberFormater(totalAssistance)}</td>
                            <td colSpan={2}>{moneyFormater(totalRevenue)}</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <td>Event with max assistance</td>
                            <td>Category with max assistance</td>
                            <td>Event with max revenue</td>
                            <td>Category with max revenue</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{eventMaxAssistance}</td>
                            <td>{maxAssistance}</td>
                            <td>{eventMaxRevenue}</td>
                            <td>{maxRevenue}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Categories Stats</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Category name</td>
                            <td>Category assistance</td>
                            <td>Category estimate</td>
                            <td>Category revenues</td>
                        </tr>
                    </thead>

                    {
                        categories.map((category, index) => (

                            <TableCategory key={index} category={obtainCategoriesStats(category)} />
                        ))
                    }

                </table>
            </section>
        </div>
    );
}

export default Table 