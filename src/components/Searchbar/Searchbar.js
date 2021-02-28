import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearch = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            onChange={this.handleSearch}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// Searchbar.propTypes = {};

export default Searchbar;
