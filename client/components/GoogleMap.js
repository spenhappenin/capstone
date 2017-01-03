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
    // debugger;

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
      // card.click(() => console.log('hit'));
    })
  }

  buildMarkers(events) {
    let m = events.map( e => {
      return(
        {
          id: e.id,
          "lat": e.latitude,
          "lng": e.longitude,
          "picture": {
            "url": "http://static-cdn.jobisjob.com/img/maps/marker-icon.png",
            "width":  32,
            "height": 40
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
    height: '575px'
    // height: '100vp'
  }
}

export default GoogleMap;
