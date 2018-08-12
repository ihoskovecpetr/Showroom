import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonStyles = { margin: 2, };

export default class CreateTodos extends React.Component {

    render() {
        return (
<tr>
           <td> ID </td>
             <td>  <input type="text" placeholder="Zadejte své jméno" ref="createInput" /> </td>
              <td>  <input type="date" placeholder="Termin Od" ref="Ter2" /> </td>
              <td>   <input type="time" name="usr_time" placeholder="Termin Do" ref="Ter3" /> </td>
              <td>  <input type="date" placeholder="Termin Od" ref="Ter4" /> </td>
              <td>   <input type="time" size="20px" name="usr_time" ref="Ter5" /> </td>
             <td>  <Button bsStyle="primary" bsSize="large" style={ButtonStyles} onClick={this.handleCreate.bind(this)} >Uložit</Button> </td>
           </tr>
        );
    }

    handleCreate(event) {
		event.preventDefault();
    console.log("Handle objednej" + this.refs.createInput.value);
    	this.props.createTask(this.refs.createInput.value, this.refs.Ter2.value, this.refs.Ter3.value, this.refs.Ter4.value, this.refs.Ter5.value) ;
    }
}

