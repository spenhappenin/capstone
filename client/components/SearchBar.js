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
        <div className='col s8'>
          <form onSubmit={this.handleSubmit}>

        <div className="input-field">
          <i className="material-icons prefix">search</i>
            <input
              className="validate"
              id="icon_prefix"
              type='text'
              ref='search'
              required={true}
              placeholder='Search Term' />
          <label htmlFor="icon_prefix"></label>
        </div>


          </form>
        </div>
        <div className='col s2'>
          <button type='button' className='btn grey' onClick={this.clearSearch}>Clear Search</button>
        </div>
      </div>
    )
  }
}

export default connect()(SearchBar);
