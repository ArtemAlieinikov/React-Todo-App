import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            label: ''
        });

        this.props.onItemAdded(this.state.label);
    };

    render() {
        return (
            <form className = 'item-add-form d-flex'
                onSubmit={ this.onSubmit }>
                <input type='text'
                        className='form-control'
                        placeholder='What should be done next?'
                        onChange={this.onLabelChange}
                        value={this.state.label}></input>
                <button className = 'btn btn-outline-secondary'>Add</button>
            </form>
        );
    }
}