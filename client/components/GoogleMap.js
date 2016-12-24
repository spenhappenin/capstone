import React, { Component } from 'react';
import AddEvent from './AddEvent';

class GoogleMap extends Component {

  componentDidMount() {
        let handler = Gmaps.build('Google');
        let markers;
        handler.buildMap({ provider: { }, internal: {id: 'map'}}, () => {
          markers = handler.addMarkers([
            {
              "lat": 40.7609915,
              "lng": -111.88287990000003,
              "picture": {
                "url": "http://icons.iconarchive.com/icons/icons-land/sport/256/Basketball-Ball-icon.png",
                "width":  32,
                "height": 32
              },
              "infowindow": "DevPoint Labs Is Awesome!"
            }
          ]);
          handler.bounds.extendWith(markers);
          handler.fitMapToBounds();
          handler.getMap().setZoom(18);
        });
    }

    render() {
      return(
        <div className='container'>
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
    height: '400px'
  }
}

export default GoogleMap;
