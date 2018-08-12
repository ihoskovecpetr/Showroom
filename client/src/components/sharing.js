import React, { Component } from 'react';
import './sharing.css';
import TodosListHeader from "./sharing/TodosListHeader";
import CreateTodos from "./sharing/CreateTodos";
import Ukoly from "./sharing/Ukoly";
import _ from 'lodash';
import { Grid , Row , Col , Image } from 'react-bootstrap';

export default class Sharing extends Component {

    constructor(props) {
    super(props);
    this.state =  { users: []};
}

componentDidMount(){
  fetch('/users')
  .then(res => res.json())
  .then(users => this.setState({ users }));
}

  render() {
    return (
    <div className="container">

  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="">Rezervace Car4way</h1>
  <Row> <Col xs={60} md={50}> <Image src="https://www.car4way.cz/autokdykoliv/images/banner-2.png" rounded /> </Col> </Row>


      <div class="breadcrumbs">
        <p class="mb-0 text-white"><a class="text-white" >Rezervace</a>  /  <span class="text-success" href="#">Pravidla</span></p>
      </div>
    </div>
  </div>
     <div className="row">
      <div className="span5">
        <table class="table table-striped table-condensed table-dark">
          <TodosListHeader />
          <Ukoly users={this.state.users} 
             //toggleTask={this.toggleTask.bind(this)} 
             saveTask={this.saveTask.bind(this)} 
             deleteTask={this.deleteTask.bind(this)} 
              />
        <CreateTodos createTask={this.createTask.bind(this)} />
        </table>
      </div>
    </div>
  </div>
    );
  }

createTask(task, task2, task3, task4, task5) {
        this.state.users.push({
            name: task,
            DateOd: task2,
            TimeOd: task3,
            DateDo: task4,
            TimeDo: task5
        });
        this.setState({ users: this.state.users });

        fetch('/users/login', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({"name": task,
                                DateOd: task2,
                                TimeOd: task3,
                                DateDo: task4,
                                TimeDo: task5
                                }),
            });
    };


saveTask(ID, oldTask1, newTask1, oldTask2, newTask2, oldTask3, newTask3, oldTask4, newTask4, oldTask5, newTask5) {
  var foundTodo = _.find(this.state.users, todo => todo.name === oldTask1);
  foundTodo.name = newTask1;
  this.setState({ users: this.state.users});
    var foundTodo = _.find(this.state.users, todo => todo.DateOd === oldTask2);
  foundTodo.DateOd = newTask2;
  this.setState({ users: this.state.users});
      var foundTodo = _.find(this.state.users, todo => todo.TimeOd === oldTask3);
  foundTodo.TimeOd = newTask3;
  this.setState({ users: this.state.users});
      var foundTodo = _.find(this.state.users, todo => todo.DateDo === oldTask4);
  foundTodo.DateDo = newTask4;
  this.setState({ users: this.state.users});
      var foundTodo = _.find(this.state.users, todo => todo.TimeDo === oldTask5);
  foundTodo.TimeDo = newTask5;
  this.setState({ users: this.state.users});
console.log(this.state.users);
          fetch('/users/update', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({IDback: ID,
                                NameBack: newTask1,
                                DateOdBack: newTask2,
                                TimeOdBack: newTask3,
                                DateDoBack: newTask4,
                                TimeDoBack: newTask5
                                }),
            });
}

deleteTask(taskDelete, id) {
  _.remove(this.state.users, todo => todo.ID === id);
  this.setState({users: this.state.users});

        fetch('/users/delete', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({"deleteID": id }),
            });
  }
}


