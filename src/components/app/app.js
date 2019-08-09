// Creates Virtual DOM structure
import React, { Component } from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

//Pure JS
//const el = React.createElement('h1', null, "Hello world!");

// React component
export default class App extends Component {

  startElementIndex = 0;

  state = {
    todoData: [
      this.createTodoItem('Make coffee'),
      this.createTodoItem('Take a shower'),
      this.createTodoItem('Wake up')
    ]
  };

  createTodoItem(label) {
    return {
      id: this.startElementIndex++,
      label: label,
      important: false,
      done: false };
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  toggleProperty = (elements, elementId, propNameToToggle) => {
    const elementIndex = elements.findIndex(el => el.id === elementId);
    const oldElement = elements[elementIndex];

    const newElement = { ...oldElement, [propNameToToggle]: !oldElement[propNameToToggle] }

    return [
      ...elements.slice(0, elementIndex),
      newElement,
      ...elements.slice(elementIndex + 1)
    ];
  };

  deleteItem = (itemId) => {
    this.setState(( { todoData } ) => {
      const elementIndex = todoData.findIndex((el) => el.id === itemId);

      const newTodoList = [
        ...todoData.slice(0, elementIndex),
        ...todoData.slice(elementIndex + 1)
      ];

      return {
        todoData: newTodoList
      };
    });
  };

  addNewItem = (itemLabel) => {
    const newItem = {
      label: itemLabel,
      id: ++this.startElementIndex
    };

    this.setState(({ todoData }) => {
      const newItemsList = [
        ...todoData,
        newItem
      ];

      return { todoData: newItemsList };
    })
  };

  render() {
    const numberOfDoneItems = this.state.todoData.filter(el => el.done).length;
    const numberOfTodoItems = this.state.todoData.length - numberOfDoneItems;

    return (
      <div className="todo-app">
        <AppHeader
          todo = { numberOfTodoItems }
          done = { numberOfDoneItems } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoList = { this.state.todoData }
          onDeleted = { (id) => this.deleteItem(id) }
          onToggleImportant = { this.toggleImportant }
          onToggleDone = { this.toggleDone }/>

        <div className="top-panel d-flex">
          <ItemAddForm onItemAdded = { this.addNewItem }/>
        </div>
      </div>
    );
  };
};