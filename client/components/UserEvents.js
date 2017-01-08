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
    // getLocation();
    // var lat, long
    // function getLocation() {
    //   console.log('getLocation')
    //   navigator.geolocation.getCurrentPosition(success, fail)
    // }
    // getLocation()

    // function success(position) {
    //   console.log(position)
    //   lat = position.coords.latitude
    //   long = position.coords.longitude
    // }
    // debugger;
    // function fail(position) {
    //   console.log('narp')
    // }

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

            <h1 className='center'> PUG Time! </h1>
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
