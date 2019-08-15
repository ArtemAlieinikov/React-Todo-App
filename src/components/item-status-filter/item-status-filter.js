import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render() {
        const { filterCondition, buttonList, onFilterChange } = this.props;

        var buttons = buttonList.map(({ name, label }) => {
            const isActive = filterCondition === name;
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
            <button type = 'button'
                    className = {`btn ${buttonClass}`}
                    key={name}
                    onClick = { () => onFilterChange(name) }>{label}</button>);
        });

        return (
            <div className = 'btn-group'>
                { buttons }
            </div>
        );
    }
}