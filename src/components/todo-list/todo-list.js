import React from 'react';

import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todoList, onDeleted }) => {
    const todoListItem = todoList.map(listItem => {
        const { id, ...itemProps } = listItem;

        return (
            <li key = { id } className = 'list-group-item'>
                <TodoListItem
                    { ...itemProps }
                    onDeleted = { () => onDeleted(id) }/>
            </li>);
    });

    return (
    <ul className = 'list-group todo-list'>
        { todoListItem }
    </ul>);
};

export default TodoList;