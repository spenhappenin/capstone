import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
import UserEvent from './UserEvent';
import UserEventCard from './UserEventCard';
import { fetchUserEvents } from '../actions/userEvents';
import { Link } from 'react-router';
import SearchBar from './SearchBar'

class UserEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUserEvents());
  }

  displayEvents() {
    let userEvents = this.props.userEvents;
    if(userEvents.length) {
      return userEvents.map( userEvent => {
        return (<UserEventCard key={userEvent.id} userEvent={userEvent} />);
      });
    } else {
      return (<h1> No Events! Go Make One! </h1>);
    }
  }

  render() {
    return(
      <div>
        <div>
          <GoogleMap />
          <SearchBar />
        </div>

        <div className='row center'>
          <h1> Events </h1>
          <Link to={'/addEvent'} className='btn blue'> Create Event </Link>
        </div>

        <div className='row'>
          <div className='col s12'>
            {this.displayEvents()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userEvents: state.userEvents }
}

export default connect(mapStateToProps)(UserEvents);
