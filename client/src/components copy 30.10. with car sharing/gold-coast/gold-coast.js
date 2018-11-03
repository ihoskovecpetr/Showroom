import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, Row , Col , Button , } from 'react-bootstrap';

import './gold-coast.css';



export default class GoldCoast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pointer: [23,45],
    }
    }

    componentDidMount(){
      console.log("this.props z compDidMout")
      console.log(this.props)
      this.setState({pointer: this.props.match})
}

  scroll(){

    window.scrollBy({ 
      top: 1000, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }

  render() {

// on Scroll make Welcome sigh disappear

window.addEventListener('scroll', check);

function check(){
  if (document.getElementById('welcomeH1')){

    if (window.pageYOffset > 500) {
      document.getElementById('welcomeH1').innerHTML = ' ';
    } else {
      document.getElementById('welcomeH1').innerHTML = 'Welcome to Gold Coast!' ;
    }
  } 
}


    return (

      <div>
         <Button id="button-scroll" bsStyle="warning" onClick={this.scroll.bind(this)}> Scroll Down Under </Button>
        <div id="back-img" className="image" />
        <h1 id="welcomeH1" >Welcome to Gold Coast!</h1>
        <div id="img" className="image" />
        <div id="article"> <h1>The Gold Coast </h1>  <img id="gold-map" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gold_Coast_skyline.jpg/1280px-Gold_Coast_skyline.jpg' /> <p> is a coastal city in the Australian state of Queensland, approximately 66 kilometres (41 mi) south-southeast of the state capital Brisbane and immediately north of the border with New South Wales. With a census-estimated 2016 population of 638,090,[3] the Gold Coast is the sixth-largest city in Australia, making it the largest non-capital city, and Queensland's second-largest city. The Gold Coast region remained largely uninhabited by Europeans until 1823 when explorer John Oxley landed at Mermaid Beach. The hinterland's red cedar supply attracted people to the area in the mid-19th century. Later in 1875, Southport was surveyed and established and grew a reputation as a secluded holiday destination for wealthy Brisbane residents. After the establishment of the Surfers Paradise Hotel in the late 1920s, the Gold Coast region grew significantly.[5][6] The area boomed in the 1980s as a leading tourist destination and in 1994, the City of Gold Coast local government area was expanded to encompass the majority of the Gold Coast's metropolitan area, becoming the second most populous local government area in Australia after the City of Brisbane.Today, the Gold Coast is a major tourist destination with its sunny subtropical climate and has become widely known for its surfing beaches, high-rise dominated skyline, theme parks, nightlife, and rainforest hinterland. The city is part of the nation's entertainment industry with television productions and a major film industry. The city hosted the 21st Commonwealth Games which ran from 4 to 15 April 2018.</p></div>
        
      </div>
    );
  }
}

