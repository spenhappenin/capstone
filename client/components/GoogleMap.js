import React, { Component } from 'react';
import AddEvent from './AddEvent';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.handler = Gmaps.build('Google');
    this.panToMarker = this.panToMarker.bind(this);
    this.attachMarkers = this.attachMarkers.bind(this);
  }

  panToMarker(idx) {
    let marker = window.markers[idx];
    marker.setMap(this.handler.getMap());
    marker.panTo();
    this.handler.getMap().setZoom(13);
    google.maps.event.trigger(marker.getServiceObject(), 'click');
  }

  componentDidMount() {
    let handler = this.handler
    let markers;
    let markerData = this.buildMarkers(this.props.userEvents || []);

    handler.buildMap({ provider: { }, internal: {id: 'map'}}, () => {
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

    handler.buildMap({ provider: { }, internal: {id: 'map'}}, () => {
      markers = handler.addMarkers(markerData);
      this.attachMarkers(markers, markerData);
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
      let sportPic;
      switch(e.sport) {
        case 'basketball':
          sportPic = 'basketball_pin.png';
          break;
        case 'baseball':
          sportPic = 'baseball_pin.png';
          break;
        case 'football':
          sportPic = 'football_pin.png';
          break;
        case 'soccer':
          sportPic = 'soccer_pin.png';
          break;
        case 'kickball':
          sportPic = 'kickball_pin.png';
          break;
        case 'badminton':
          sportPic = 'badminton_pin.png';
          break;
        case 'volleyball':
          sportPic = 'volleyball_pin.png';
          break;
        case 'tennis':
          sportPic = 'tennis_pin.png';
          break;
        case 'pingpong':
          sportPic = 'pong_pin.png';
          break;
        case 'hockey':
          sportPic = 'hockey_pin.png';
          break;
        case 'golf':
          sportPic = 'golf_pin.png';
          break;
        default:
          sportPic = "http://static-cdn.jobisjob.com/img/maps/marker-icon.png"
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
          "infowindow": e.description
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
