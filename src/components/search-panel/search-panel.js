import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px',
     };

    const placeHolderMessage = 'Type here to search';

    return <input
        className = 'search-input'
        placeholder = { placeHolderMessage }
        style = { searchStyle } />;
};

export default SearchPanel;