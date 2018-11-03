//@ts-check

import React from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';

const wellStyles = { width: 80, margin: 2 };

export default class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isEditting: false,
    };
  }

    renderAkciSekce() {

        if (this.state.isEditting) {
                return (
                    <div className="text-center" >
                        <Button bsStyle="success" style={wellStyles} onClick={this.onSaveClick.bind(this)} >Save</Button>
                        <Button bsStyle="warning" style={wellStyles} onClick={this.onCancelClick.bind(this)} >Cancel</Button>
                    </div>
                    );
            }             
                return (
                    <div className="text-center" >
                        <Button bsStyle="success" style={wellStyles} onClick={this.onEditClick.bind(this)}>Edit</Button>
                        <Button bsStyle="danger" style={wellStyles} onClick={this.props.deleteTask.bind(this, this.props.name, this.props.ID)}>Delete</Button>
                    </div>
                    );
    }

    renderTaskSekci() {

    const{ name, DateOd , TimeOd , DateDo , TimeDo , itsDone } = this.props;


        if (this.state.isEditting) {
           return(  <tr> 
                        <td><b>{this.props.ID}</b> </td>
                        <td> <input type="text" defaultValue={name} ref="edIm1" /> </td>
                        <td> <input type="text" defaultValue={DateOd} ref="edIm2" /></td>
                        <td> <input type="text" defaultValue={TimeOd} ref="edIm3" /> </td>
                        <td> <input type="text" defaultValue={DateDo} ref="edIm4" />  </td>
                        <td> <input type="text" defaultValue={TimeDo} ref="edIm5" /> </td>
                        <td> {this.renderAkciSekce()} </td>  
                    </tr>
                );}
            return( <tr>
                        <td>{this.props.ID}</td>
                        <td><b>{name}</b></td>
                        <td>{this.props.DateOd}</td>
                        <td>{this.props.TimeOd}</td>
                        <td>{this.props.DateDo}</td>
                        <td>{this.props.TimeDo}</td>
                        <td>{this.renderAkciSekce()}</td>  
                    </tr>
                );
            }

//
    render() {  
        return (this.renderTaskSekci() );
    }

    onEditClick() {
        this.setState({ isEditting: true });
        }

    onCancelClick() {
        this.setState({ isEditting: false });
        }

    onSaveClick(e) {
        e.preventDefault();
        const ID = this.props.ID;
        const oldTask1 = this.props.name;
        const newTask1 = this.refs.edIm1.value;
        const oldTask2 = this.props.DateOd;
        const newTask2 = this.refs.edIm2.value;
        const oldTask3 = this.props.TimeOd;
        const newTask3 = this.refs.edIm3.value;
        const oldTask4 = this.props.DateDo;
        const newTask4 = this.refs.edIm4.value;
        const oldTask5 = this.props.TimeDo;
        const newTask5 = this.refs.edIm5.value;
        this.props.saveTask(ID, oldTask1, newTask1, oldTask2, newTask2, oldTask3, newTask3, oldTask4, newTask4, oldTask5, newTask5);
        this.setState({ isEditting: false});
        }
    }

