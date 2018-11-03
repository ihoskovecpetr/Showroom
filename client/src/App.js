//@ts-check

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, Row , Col } from 'react-bootstrap';
import { Route, NavLink, HashRouter} from "react-router-dom";

import './App.css';
import GeoBragger from './components/geobragger';
import Game from './components/game';
import RSS from './components/rss';
import Animation from './components/animation/animation';
import Draw from './components/draw/drawing';
import GoldCoast from './components/gold-coast/gold-coast';
import ReactMove from './components/react-move/react-move';




class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      marker: [{lat: 49.95, lng: 15.91} ,{lat: 37, lng: 22} ,{lat: 45, lng: 23} ],  // DEL???????
      users: [],
    }
  }

  componentDidMount(){

  }
 

  render() {


    const style = {width: '100%', height: '50%'}
    var points = [
    {lat: this.state.marker[0].lat, lng: this.state.marker[0].lng},   // DEL???????
    {lat: this.state.marker[1].lat, lng: this.state.marker[1].lng},
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
    }


    return (

      <div className="App">
      <h1 className="App-title">Technology stack!</h1>
        <header className="App-header">
        <Grid>
        <Row>
          
          </Row>
          <Row>
            <Col>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className="App-logo" alt="logo" />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/2000px-Badge_js-strict.svg.png' className="App-logo" alt="logo" />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png' className="App-logo" alt="logo" />
            <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' className="App-logo-freez" alt="logo" />
            <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Mysql.png/640px-Mysql.png' className="App-logo-freez" alt="logo" />
              </Col>
          </Row>
          <Row>
          <h1 className="App-title"> </h1>
          </Row>
          </Grid>
        </header>

        <HashRouter>
                <div>
                  <h1></h1>
                  <ul className="header">
                  <li><NavLink to="/gold-coast">Gold Coast</NavLink></li>
                    <li><NavLink to="/geobragger">GeoBragger</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                    <li><NavLink to="/rss">RSS</NavLink></li>
                    <li><NavLink to="/animation">Animation</NavLink></li>
                    <li><NavLink to="/draw">Drawing</NavLink></li>
                    <li><NavLink to="/react-move">React-Move</NavLink></li>
                  </ul>
                  <div className="content">
                    <Route exact path="/" component={GoldCoast}/>
                    <Route path="/gold-coast" component={GoldCoast}/>
                    <Route path="/geobragger" component={GeoBragger}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/rss" component={RSS}/>
                    <Route path="/animation" component={Animation}/>
                    <Route path="/draw" component={Draw}/>
                    <Route path="/react-move" component={ReactMove}/>
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