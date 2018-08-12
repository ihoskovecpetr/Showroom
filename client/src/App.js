import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, Row , Col , Image , ListGroup , Button , ListGroupItem, FormControl } from 'react-bootstrap';
import { Route, NavLink, HashRouter} from "react-router-dom";
import GeoBragger from './components/geobragger';
import Game from './components/game';
import RSS from './components/rss';
import Sharing from './components/sharing';



class App extends React.Component {


  constructor(){
    super();

    this.state = {
      marker: [{lat: 49.95823690, lng: 15.91172000} ,{lat: 37, lng: 22} ,{lat: 45, lng: 23} ],
      users: [],

    }
  }

  componentDidMount(){

}
 

  render() {


    const style = {width: '100%', height: '50%'}

    var points = [
    {lat: this.state.marker[0].lat, lng: this.state.marker[0].lng},
    {lat: this.state.marker[1].lat, lng: this.state.marker[1].lng},
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
    }


    return (

      <div className="App">
        <header className="App-header">
        <h1 className="App-title">What do i use?</h1>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/2000px-Badge_js-strict.svg.png' className="App-logo" alt="logo" />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png' className="App-logo" alt="logo" />
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className="App-logo" alt="logo" />
          <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' className="App-logo" alt="logo" />
          <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Mysql.png/640px-Mysql.png' className="App-logo" alt="logo" />
           <img src='https://cdn-images-1.medium.com/max/546/1*36D6oCrl2Fpif_8NzK2lYA.png' className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome</h1>
        </header>
<HashRouter>
        <div>
          <h1></h1>
          <ul className="header">
            <li><NavLink to="/components/sharing">Car sharing app</NavLink></li>
            <li><NavLink to="/components/geobragger">GeoBragger</NavLink></li>
            <li><NavLink to="/components/game">Game</NavLink></li>
            <li><NavLink to="/components/rss">RSS</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/components/sharing" component={Sharing}/>
            <Route path="/components/geobragger" component={GeoBragger}/>
            <Route path="/components/game" component={Game}/>
            <Route path="/components/rss" component={RSS}/>
          </div>
        </div>
</HashRouter>
        


      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDgJ8PXMCjCJgtEjBu1gCSxLGaUoq7kW6c")
})(App)