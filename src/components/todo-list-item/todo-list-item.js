import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    constructor() {
        super();
        this.state = {
             isItDone: false,
             isItImportant: false,
        };
    }

    onLabelClick = () => {
        this.setState(({ isItDone }) => {
            return { isItDone: !isItDone }
        });
    };

    onMarkItemAsImportant = () => {
        this.setState(({ isItImportant }) => {
            return { isItImportant: !this.state.isItImportant }
        });
    }

    render() {
        const { label, important, onDeleted } = this.props;
        const { isItDone, isItImportant } = this.state;

        let classNames = 'todo-list-item';

        if (isItDone) {
            classNames += ' done';
        }

        if (isItImportant) {
            classNames += ' important';
        }

        return (
            <span className = { classNames }>
                <span
                    className = 'todo-list-item-label'
                    onClick = { this.onLabelClick }>
                    { label }
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick = { this.onMarkItemAsImportant }>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>);
    }
}