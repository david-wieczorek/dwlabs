import React, { Component } from 'react';
import L from 'leaflet';

class Mapbox extends Component {
   componentDidMount() {
      this.map();
   }
   map() {
      const mymap = L.map('mymapbox').setView([51.505, -0.09], 14);
      L.circle([51.508, -0.11], {
         color: 'red',
         fillColor: '#f03',
         fillOpacity: 0.5,
         radius: 500
      }).addTo(mymap);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);
   }

   render() {
      return <div id="mymapbox" />;
   }
}

export default Mapbox;
