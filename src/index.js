// Creates Virtual DOM structure
import React from 'react';

// Converts Virtual DOM objects into common DOM objects
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

//Pure JS
//const el = React.createElement('h1', null, "Hello world!");

// React component
const App = () => {
    const isOverloaded = false;
    const todoData = [
        { label: 'Make coffee', important: false },
        { label: 'Take a shower', important: false },
        { label: 'Wake up', important: true },
    ];
    const okMessage = <div>Have a good day.</div>;

    // JSX - Babel transpiles into plain JS
    return (
        <div>
            <AppHeader />
            { okMessage }
            <SearchPanel />
            <TodoList todoList = { todoData } />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));