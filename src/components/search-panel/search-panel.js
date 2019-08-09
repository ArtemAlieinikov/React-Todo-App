import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const placeHolderMessage = 'Type here to search';

    return <input
        className = 'search-input'
        placeholder = { placeHolderMessage }/>;
};

export default SearchPanel;