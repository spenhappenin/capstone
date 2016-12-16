import React, { Component } from 'react';

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
                "url": "https://camo.githubusercontent.com/fda67f6a65bb639a73cc56a5f678964c89f7d672/687474703a2f2f6465762e626f7764656e7765622e636f6d2f612f692f6a732f69636f6e732f6a6176617363726970742d69636f6e2d33322e706e67",
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
    width: '1000px'
  },
  map: {
    width: '1000px',
    height: '700px'
  }
}

export default GoogleMap;
