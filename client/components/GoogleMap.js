import React, { Component } from 'react';
import AddEvent from './AddEvent';
import moment from 'moment';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.handler = Gmaps.build('Google');
    this.panToMarker = this.panToMarker.bind(this);
    this.attachMarkers = this.attachMarkers.bind(this);
    this.state = ({ latitude: 0.00, longitude: 0.00 });
  }

  componentWillMount() {
    this.userLocation();
    $(".pug-logo").addClass("just-pug")
  }

  componentWillUnmount() {
    $(".pug-logo").removeClass("just-pug")
  }

  userLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert('No maps for you');
    }
  }

  showPosition = (position) => {
    this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });

  }

  panToMarker(idx) {
    let marker = window.markers[idx];
    marker.setMap(this.handler.getMap());
    marker.panTo();
    this.handler.getMap().setZoom(10)
    google.maps.event.trigger(marker.getServiceObject(), 'click');
  }

  componentDidMount() {
    let handler = this.handler
    let markers;
    let markerData = this.buildMarkers(this.props.userEvents || []);

    handler.buildMap({ provider: {center: {lat: this.state.latitude, lng: this.state.longitude}}, internal: {id: 'map'}}, () => {
      markers = handler.addMarkers(markerData);
      this.attachMarkers(markers, markerData);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(10);
    });
  }

  componentWillReceiveProps(nextProps) {
    let handler = this.handler;
    let markers;
    let markerData = this.buildMarkers(nextProps.userEvents);

    handler.buildMap
      ({ provider: {center: {lat: this.state.latitude, lng: this.state.longitude}}, internal: {id: 'map'}}, () => {
        markers = handler.addMarkers(markerData);
        this.attachMarkers(markers, markerData);
        handler.map.centerOn(markers[0]);
        handler.bounds.extendWith(markers);
        handler.fitMapToBounds();
        handler.getMap().setZoom(10);
      });
  }

  attachMarkers(markers, markerData) {
    window.markerData = markerData;
    window.markers = markers;
    markers.map( (marker, i) => {
      let cardId = `#userEvent-${window.markerData[i].id}`;
      let card = $(cardId);
      card.click(() => this.panToMarker(i));
    })
  }

  buildMarkers(events) {
    let m = events.map( e => {
    let timeFormat = moment(e.time, 'YYYY MM DD hh:mm:ss z' ).format('h:mm a');
    var info = "<div className='row' style={{backgroundColor: '#081f2b'}}>" +
                  "<div className='col s12 m12 l12'>" +
                    `<h6 className='big white-text'>${e.name}</h6>` +
                  "</div>" +
                  "<div className='col s12 m12 l12'>" +
                    `<p className='small white-text'>${e.street}</p>` +
                  "</div>" +
                  "<div className='col s12 m12 l12'>" +
                  `<span className='small white-text' style={{fontSize: '14px'}}>${timeFormat}</span>` +
                  "</div>" +
                "</div>";

      let sportPic;
      switch(e.sport) {
        case 'basketball':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630389/basketball_pin_ioirxi.png';
          break;
        case 'baseball':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630387/baseball_pin_inl5v6.png';
          break;
        case 'football':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630392/football_pin_ghzsia.png';
          break;
        case 'soccer':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630845/soccer_pin_zeme2b.png';
          break;
        case 'kickball':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630404/kickball_pin_pulxzn.png';
          break;
        case 'badminton':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630863/badminton_pin_ymxsft.png';
          break;
        case 'volleyball':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630414/volleyball_pin_t4gakn.png';
          break;
        case 'tennis':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630411/tennis_pin_zazlxl.png';
          break;
        case 'pingpong':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630407/pong-pin_mzqmgs.png';
          break;
        case 'hockey':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630397/hockey_pin_q7kror.png';
          break;
        case 'golf':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483630394/golf_pin_vhluyz.png';
          break;
        case 'frisbee':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483656273/frisbee_pin_jrawjp.png';
          break;
        case 'lacrosse':
          sportPic = 'https://res.cloudinary.com/omash612/image/upload/v1483656252/lacrosse_pin_qlsw3t.png';
          break;
        default:
          sportPic = "https://static-cdn.jobisjob.com/img/maps/marker-icon.png"
      }
      return(
        {
          id: e.id,
          "lat": e.latitude,
          "lng": e.longitude,
          "picture": {
            "url": sportPic,
            "width":  50,
            "height": 50
          },
          "infowindow": info
        }
      )
    })
    return(m)
  }

  render() {
    return(
      <div>
        <div style={styles.mapContainer}>
          <div id="map" style={styles.map}></div>
        </div>
      </div>
    );
  }
}

const styles = {
  mapContainer: {
    width: '100%'
  },
  map: {
    width: '100%',
    height: '91vh'
  }
}

export default GoogleMap;
