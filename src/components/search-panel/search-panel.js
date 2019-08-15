import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        searchText: ''
    };

    onChange = (event) => {
        const term = event.target.value;
        this.setState({ searchText: term });
        this.props.onFilter(term);
    };

    render() {
        return (<input
            className = 'search-input'
            placeholder = 'Type here to search'
            onChange={this.onChange}
            value={this.state.searchText}/>);
    };
};