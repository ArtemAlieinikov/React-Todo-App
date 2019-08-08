// Creates Virtual DOM structure
import React, { Component } from 'react';

// Converts Virtual DOM objects into common DOM objects
import ReactDOM from 'react-dom';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

//Pure JS
//const el = React.createElement('h1', null, "Hello world!");

// React component
export default class App extends Component {

  state = {
    todoData: [
      { label: 'Make coffee', id: 1 },
      { label: 'Take a shower', id: 2 },
      { label: 'Wake up', id: 3 },
    ]
  };

  deleteItem = (itemId) => {
    this.setState(( { todoData } ) => {
      const elementIndex = todoData.findIndex((el) => el.id == itemId);

      const newTodoList = [
        ...todoData.slice(0, elementIndex),
        ...todoData.slice(elementIndex + 1)
      ];

      return {
        todoData: newTodoList
      };
    });
  };

  render() {
    const todoStatistics = [1, 2];

    return (
      <div className="todo-app">
        <AppHeader { ...todoStatistics } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoList = { this.state.todoData }
          onDeleted = { (id) => this.deleteItem(id) }/>
      </div>
    );
  };
};