import React from 'react';
import './TodosListHeader.css';


export default class TodosListHeader extends React.Component {

    render() {
        return (

            <thead class="thead-dark" >
            <tr>
                <th scope="col">ID</th>
                <th>Jméno</th>
                <th>Datum Výpůjčky</th>
                <th>čas Výpůjčky</th>
                <th>Datum Návratu</th>
                <th>čas Návratu</th>
                <th>Akce</th>
            </tr>
            </thead>
            );

    }
}

