import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
import UserEvent from './UserEvent';
import { fetchUserEvents } from '../actions/userEvents';

class UserEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUserEvents());
  }

  displayEvents() {
    let userEvents = this.props.userEvents;
    debugger;
    if(userEvents.length) {
      return userEvents.map( userEvent => {
        return (<UserEvent key={userEvent.id} userEvent={userEvent} />);
      });
    } else {
      return (<h1> No Events, Go Make One! </h1>);
    }
  }

  render() {
    return(
      <div>
        <div className='row'>
          <GoogleMap />
        </div>

        <div className='row center'>
          <h1> Events </h1>
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
