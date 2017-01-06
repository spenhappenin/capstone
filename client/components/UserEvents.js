import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
import UserEventCard from './UserEventCard';
import { fetchUserEvents } from '../actions/userEvents';
import { Link } from 'react-router';
import SearchBar from './SearchBar'
import NavBar from './Navbar';
import store, { history } from '../store';

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
      <div className='event-background'>
        <NavBar history={history}/>
        <div className='row'>
          <div className='col s7'>
            <GoogleMap userEvents={ this.props.userEvents } />
          </div>

          <div className='col s5 event-list'>
            <h1 className='center'> GameOn! </h1>
            <div className='row'>
              <div className='col s4'>
                <Link to={'/addEvent'} className='btn blue'> Create Event </Link>
              </div>
              <div className='col s8'>
                <SearchBar />
              </div>
            </div>
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
