import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todoList }) => {
    const todoListItem = todoList.map(listItemMetadata => {
        return <li><TodoListItem { ...listItemMetadata }/></li>
    });

    return (
    <ul>
        { todoListItem }
    </ul>);
};

export default TodoList;