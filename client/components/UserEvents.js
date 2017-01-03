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
      return (<h1 className='center'> No Events! Create One! </h1>);
    }
  }

  render() {
    return(
      <div>

        <div className='row'>
          <div className='col s7'>
            <GoogleMap />
            <SearchBar />
          </div>

          <div className='col s5'>
            <h1 className='center'> Sports Events </h1>
            <Link to={'/addEvent'} className='btn blue'> Create Event </Link>
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
