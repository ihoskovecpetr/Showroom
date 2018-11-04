import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, Row , Col , Button , } from 'react-bootstrap';

import './geobragger.css';


class GeoBragger extends React.Component {

  constructor(){
    super();
    this.poloha = this.poloha.bind(this),
    this.showPosition = this.showPosition.bind(this),
    this.createTask = this.createTask.bind(this),
    this.onMarkerClick = this.onMarkerClick.bind(this),
    this.state = {
      marker: [{lat: 49.95, lng: 15.91} ,{lat: 37, lng: 22} ,{lat: 45, lng: 23} ],
      users: [],
      showingInfo: false,
    }
  }

  componentDidMount(){
      fetch('/users/geo-info')
        .then(res => res.json())
        .then(users => this.setState({ users }));
}
 
  poloha(){

        if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);

    } else { 
       console.log("Geolocation is not supported by this browser.");
    }
}

  showPosition(position){
      console.log("Latitude: " + position.coords.latitude + 
      "Longitude: " + position.coords.longitude )

      fetch('/users/new-geo', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
            body: JSON.stringify({ Tit: "Moje pozice",
                                    Lat: position.coords.latitude,
                                    Lng: position.coords.longitude,
                                  }),
              });

    console.log(this.state.users)
          this.setState( {
        users: [...this.state.users, {ID: this.state.users.length , Tit: "Kdo odkud" , Lat: position.coords.latitude, Lng: position.coords.longitude}]
      })

  }


  createTask(task, task2, task3){
          this.state.users.push({
              Tit: "task",
              Lat: (Math.random() * 45),
              Lng: (Math.random() * 65)
          });
          this.setState({ users: this.state.users });
  console.log("Users po pridanim na tvrdo--" + this.state.users)
  console.log("google")
  console.log(this.google)
          fetch('/users/new-geo', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
            body: JSON.stringify({ Tit: "task",
                                    Lat: 32.555,
                                    Lng: 52.789,
                                  }),
              });
      };

      onMapClicked = (props) => {
    console.log("Map clicked -- ")  
    }

    onMarkerClick = () => {
      console.log("tenhle Marker Click")
      if (this.state.showingInfo) {
         this.setState({showingInfo:false}) 
      } else {
        this.setState({showingInfo:true}) 
    }
      }


  render() {

console.log("Infowindow" + this.state.showingInfo)

    const style = {width: '95%', height: '50%', border: 'solid', marginRight: "auto", marginLeft: "auto"}


    return (

      <div>
        <header className="App-header-geobragger">
          <h1 className="App-title">Sharing of your actual GPS location</h1>
        </header>
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center" >
              <Grid>
                <Row className="show-grid">
                <Col xs={12} md={12}>
                  <Button bsStyle="info" onClick={this.poloha} >Load your GPS location</Button>
                   <Button bsStyle="info" onClick={this.createTask} >Add random point into the MySQL DB</Button>
                </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>

        <div className="mapa">
          <Map  google={this.props.google}
                style={style}
                zoom={5}
                onClick={this.onMapClicked()}
                center={{lat: -33.86, lng: 151.057 }}>
            <Marker position={{lat: -38.86 , lng: 151.20}} onClick={this.onMarkerClick} > 
              <InfoWindow visible={this.showingInfo}>   
                  <div>
                    <h1>XX Name place</h1>
                  </div>
              </InfoWindow>
            </Marker>
              {this.state.users.map((users, index) => (
                  <Marker key={index} position={{lat: users.Lat, lng: users.Lng}}> </Marker>
                    ))}
          </Map>
        </div>

      </div>
    );
  }
}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDgJ8PXMCjCJgtEjBu1gCSxLGaUoq7kW6c"),
  LoadingContainer: LoadingContainer
})(GeoBragger)