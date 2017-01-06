import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchQuery, fetchUserEvents } from '../actions/userEvents';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchQuery(this.refs.search.value));
  }

  clearSearch() {
    this.refs.search.value = '';
    this.props.dispatch(fetchUserEvents());
  }

  render () {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            ref='search'
            required={true}
            placeholder='Search Term' />
          <input type='submit' value='Search' className='btn blue' />
          <button type='button' className='btn grey' onClick={this.clearSearch}>Clear Search</button>
        </form>
      </div>
    )
  }
}

export default connect()(SearchBar);
