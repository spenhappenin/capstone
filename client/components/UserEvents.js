import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
import UserEventCard from './UserEventCard';
import { fetchUserEvents } from '../actions/userEvents';
import { Link } from 'react-router';
import SearchBar from './SearchBar';
import store, { history } from '../store';

class UserEvents extends Component {
  constructor(props) {
    super(props);
    this.state = ({ latitude: 0.00, longitude: 0.00 })
  }

  componentWillMount() {
    this.userLocation();
  }

  userLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      alert('No maps for you');
    }
  }

  showPosition = (position) => {
    this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });

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
      return (<h1 className='center small'> No Events! Create One! </h1>);
    }
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col s12 m7 l7'>
            <GoogleMap userEvents={ this.props.userEvents } />
          </div>
          <div className='col s12 m5 l5 event-list'>
            <SearchBar history={history} />
            <div className='row pug-events'>
              <div className='col s12 m6 l6 center'>
                <img src='just_pug.svg' className='just-pug' />
              </div>
              <div className='col s12 m6 l6 center'>
                <h2 className='center big'>  Events </h2> 
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m5'>
                <Link to={'/addEvent'} className='btn fixedbutton btn-floating btn-large waves-effect waves-light'></Link>
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
