import React from 'react';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';

const TableCategory = ({ category }) => {
    return (
        <tbody >
            <tr>
                <td>{category.category}</td>
                <td>{numberFormater(category.assistance)} in {category.pastEvents} events</td>
                <td>{numberFormater(category.estimate)} in {category.upcomingEvents} events</td>
                <td>{moneyFormater(category.revenues)}</td>
            </tr>
        </tbody>
    );
}

export default TableCategory;
