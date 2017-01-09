import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchQuery, fetchUserEvents } from '../actions/userEvents';
import GoogleMap from './GoogleMap';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    $('#search-form').hide();
    $('#search .trigger').click(function(){
      $('#search-form').animate({width: 'toggle'}, 500);
    });
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
      <div>
        <span id='search'>
          <i className="material-icons prefix trigger">search</i>
          <form  className='search-bar' id='search-form' onSubmit={this.handleSubmit} >
            <span className="input-field">
              <input
                className="validate clearable"
                id="icon_prefix"
                type='text'
                ref='search'
                required={true}
                placeholder='Search Game' />
            </span>
              <button className='btn red' onClick={this.clearSearch}> x </button>
          </form>
        </span>
      </div>
    )
  }
}

export default connect()(SearchBar);
