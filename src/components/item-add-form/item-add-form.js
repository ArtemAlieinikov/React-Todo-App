import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {
    return (
        <div className = 'item-add-form'>
            <input className = 'add-input'/>
            <button
                className = 'btn btn-outline-secondary'
                onClick = { () => onItemAdded("Test item") }>Add</button>
        </div>
    );
}

export default ItemAddForm;