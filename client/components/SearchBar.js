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
    $('#searching .trigger').click(function(){
      $('#search-form').animate({width: 'toggle'}, 400);
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
        <span id='searching'>
          <i className="material-icons trigger">search</i>
          <div className='nav-wrapper'>
            <form  className='search-bar' id='search-form' onSubmit={this.handleSubmit} >
              <div className="input-field">
                <input id="search" type='search' ref='search' placeholder='Search Game' required={true} />
                <i className="material-icons red-text" onClick={this.clearSearch}>close</i>
              </div>
            </form>
          </div>
        </span>
      </div>
    )
  }
}

export default connect()(SearchBar);
