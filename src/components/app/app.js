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
  state = {
    todoData: [
      this.createTodoItem(1, 'Make coffee'),
      this.createTodoItem(2, 'Take a shower'),
      this.createTodoItem(3, 'Wake up')
    ],
    searchCondition: '',
    filterCondition: 'all'
  };

  buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
  ];

  startElementIndex = 4;

  createTodoItem(id, label) {
    return {
      id: id,
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

  setFilterCondition = (searchCondition) => {
    this.setState({ searchCondition });
  };

  filterItemsByName = (elements, filterCondition) => {
    if (filterCondition.length === 0) {
      return elements;
    }

    return elements.filter(el => el.label.toLowerCase().indexOf(filterCondition.toLowerCase()) > -1);
  };

  filterItemsByStatus = (elements, filterCondition) => {
    switch(filterCondition){
      case '':
        return elements;
      case this.buttons[0].name:
        return elements;
      case this.buttons[1].name:
        return elements.filter(el => !el.done);
      case this.buttons[2].name:
        return elements.filter(el => el.done);
    }
  };

  onFilterChange = (name) => {
    this.setState(({ filterCondition: name }));
  };

  render() {
    const numberOfDoneItems = this.state.todoData.filter(el => el.done).length;
    const numberOfTodoItems = this.state.todoData.length - numberOfDoneItems;

    const { searchCondition, filterCondition } = this.state;

    const visibleItems = this.filterItemsByStatus(this.filterItemsByName(this.state.todoData, searchCondition), filterCondition);

    return (
      <div className="todo-app">
        <AppHeader
          todo = { numberOfTodoItems }
          done = { numberOfDoneItems } />
        <div className="top-panel d-flex">
          <SearchPanel onFilter={ this.setFilterCondition }/>
          <ItemStatusFilter
            buttonList = { this.buttons }
            onFilterChange = { this.onFilterChange }
            filterCondition = { filterCondition } />
        </div>

        <TodoList
          todoList = { visibleItems }
          onDeleted = { (id) => this.deleteItem(id) }
          onToggleImportant = { this.toggleImportant }
          onToggleDone = { this.toggleDone }/>

        <div className="buttom-panel d-flex">
          <ItemAddForm onItemAdded = { this.addNewItem }/>
        </div>
      </div>
    );
  };
};