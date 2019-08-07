import React from 'react';

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px',
     };

    const placeHolderMessage = 'Type here to search';

    return <input
        placeholder = { placeHolderMessage }
        style = { searchStyle } />;
};

export default SearchPanel;