import React, { Component } from 'react';
import Add from '../containers/add'
import TodoList  from '../containers/todoList'
import Filter  from '../containers/filter'

export default class App extends Component {

  constructor (props) {
    super(props);

  }

  render() {
    return (
      <div className="main">
        <h2>My todo list</h2>
        <Add />
        &nbsp;
        <Filter />
        &nbsp;
        <TodoList />   
      </div>
    );
  }
}
