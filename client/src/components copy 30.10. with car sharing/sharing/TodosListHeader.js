import React from 'react';
import './TodosListHeader.css';


export default class TodosListHeader extends React.Component {

    render() {
        return (

            <thead class="thead-dark" >
            <tr>
                <th scope="col">ID</th>
                <th>Name</th>
                <th>Pick-up date</th>
                <th>Pick-up Time</th>
                <th>Return date</th>
                <th>Return time</th>
                <th>Action</th>
            </tr>
            </thead>
            );

    }
}

