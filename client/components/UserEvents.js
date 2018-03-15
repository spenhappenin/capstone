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
    $('body').css('background-color', '#0b2a3b');
    $('body').css('height', '100vh');
    $('body').css('width', '100%');
  }

  displayEvents() {
    let userEvents = this.props.userEvents;
    if(userEvents.length) {
      return userEvents.map( userEvent => {
        return (<UserEventCard key={userEvent.id} userEvent={userEvent} updateEvents={this.updateEvents} />);
      });
    } else {
      return (<h1 className='center small white-text'> No Events! Create One! </h1>);
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
            <div className='pug-events center'>
              <img src='https://res.cloudinary.com/omash612/image/upload/v1484100561/just-pug_q1iamb.svg' style={{height: '80px', marginTop: '20px'}} />
              <h2 className='center big' style={{color: 'white'}}>  Events </h2>
            </div>
            <div className='row'>
              <div className='col s12 m5'>
                <Link to={'/addEvent'} id='addEventbtn' className='btn fixedbutton btn-floating btn-large waves-effect waves-light'><i className="material-icons">add</i></Link>
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
