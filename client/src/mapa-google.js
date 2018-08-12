import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export default class MapaGoogle extends Component {

	render(){
		return(
		<Map
          google={this.props.google}
          st
          zoom={8}
          onClick={this.onMapClicked}
  
        >
 
       {this.props.users.map(users => (
            <Marker position={{lat: users.Lat, lng: users.Lng}}>
            </Marker>
          ))}

      </Map>
			);
	}
}