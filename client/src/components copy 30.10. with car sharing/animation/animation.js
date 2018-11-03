import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row , Col , Button , } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './animation.css';


export default class Animation extends React.Component {

  constructor(){
    super();
    this.state = {
      users: [],
      show: false
    }
  }
  componentDidMount(){
}


updateShow = (valls) => {
  this.setState((previouss) => ({ show: valls }));
};

passState(){
  console.log(this.state);
}

playto(){
    console.log("nicccc")
    var xx = document.querySelectorAll("#root")
    console.log("tisk xx")
    console.log(xx)
    document.getElementById("container").classList.add("move");
    document.getElementById("canvas").classList.add(("move"));
    var ss = document.styleSheets;
    console.log("tisk ss")
    console.log(ss)
}
resetto(){
    console.log("remove")
    document.getElementById("container").classList.remove("move");
    document.getElementById("canvas").classList.remove(("move"));
}
 
  render() {


    const style = {width: '95%', height: '50%', border: 'solid'}


    return (

      <div>
          <ScrollAnimation animateIn="fadeIn" duration='2'>
          <Button bsStyle="warning" onClick={this.playto.bind(this)} >Go to Australia</Button>
          <Button bsStyle="success" onClick={this.resetto.bind(this)} >Go back Home</Button>
          <Button bsStyle="info" onClick={this.updateShow.bind(this, "45")} >UPDATE STATE TOGGLE HIM</Button>
          <Button bsStyle="danger" onClick={this.passState.bind(this)} >SHOW STATE</Button>
          </ScrollAnimation>

    <div className="container" id="container">
    
    <svg className="cat" id="catId" width="800" height="600" >
    </svg>
    <div id="helper">
        <img id='airplane' src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Airplane_silhouette_red.svg" alt="Smiley face" height="42" width="42" />
        <div id='holder' height="42" width="42" > - </div>
    </div>
</div>

    <div class="canvas" id="canvas">

{/* Drawing path to go on */}
<svg id="logo" width="640" height="480" >
    <g className="layer">
    <title>Layer 1</title>
    <path id="draw"  d="m -75 ,155 q 115 -50 230 0" fill="transparent" stroke-width="5" transform="rotate(-98 35.5 141.5)"/>
    <path id="draw2" strokeWidth="5" d="M 33 27 l 70 130" />
    </g>
   </svg>
</div>


      </div>
    );
  }
}
