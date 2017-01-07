import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
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
    $('body').css('background-image', '');
    $('body').css('background-color', 'white');
    $('body').css('height', '100vh');
    $('body').css('width', '100%');
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
            <GoogleMap userEvents={ this.props.userEvents } />
          </div>
          <div className='col s5 event-list'>

                <div className=''>
                <SearchBar />
                </div>

            <h1 className='center'> PUG Events </h1>
            <div className='row'>
              <div className='col s4'>
                <Link to={'/addEvent'} className='btn blue fixedbutton btn-floating btn-large waves-effect waves-light'><i className="material-icons">add</i></Link>
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
