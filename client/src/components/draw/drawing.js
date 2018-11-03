import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button , } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './drawing.css';


export default class Draw extends React.Component {

  constructor(){
    super();
    this.state = {
      users: [],
    }
  }
  componentDidMount(){
}

travel(){
    document.getElementById("draw-canvas").classList.add("move");
}

back(){
    document.getElementById("draw-canvas").classList.remove("move");
}

 
  render() {

    return (

      <div >
          <Button className="btn" bsStyle="warning" onClick={this.travel.bind(this)}  >Travel</Button>
          <Button className="btn" bsStyle="success" onClick={this.back.bind(this)} >Back</Button>

          <div id="draw-canvas" className="holder" >


            <svg id="svg" width="580" height="400" xmlns="http://www.w3.org/2000/svg">
            
                <g id="line" > 
                <title>Layer 1</title>
                <path id="path"  stroke-width="3px" stroke="white" d="m1,28.91667l249.5,141.5c-75.5,-68.5 -29.50001,-123.66667 -32.91667,-125c92.99994,-4.08333 42.33334,68.25 43.91667,74c45.91664,5.91666 3.58333,18.66667 1,19c38.41664,90.91661 -61.49999,67.16667 -61.16666,67.91667" opacity="0.97" fill-opacity="null" stroke-width="7.5" stroke="#A4FFFF" fill="none"/>
                </g>
            </svg>

            <svg id="svg2" className="point">
                <g id="line2" >
                <ellipse id="path2" ry="30" rx="30" cy="35.4375" cx="35" stroke-width="1.5" stroke="#ff0000" fill="#ff0000"/>
                </g>
            </svg>

            <svg id="svg3" className="point">
                <g id="line3" >
                <ellipse id="path3" ry="30" rx="30" cy="35.4375" cx="35" stroke-width="1.5" stroke="#ff0000" fill="#ff0000"/>
                </g>
            </svg>

            <svg id="svg4" className="point">
                <g id="line4" >
                <ellipse id="path4" ry="30" rx="30" cy="35.4375" cx="35" stroke-width="1.5" stroke="#ff0000" fill="#ff0000"/>
                </g>
            </svg>

            <svg id="svg5" className="point">
                <g id="line5" >
                <ellipse id="path5" ry="30" rx="30" cy="35.4375" cx="35" stroke-width="1.5" stroke="#ff0000" fill="#ff0000"/>
                </g>
            </svg>

            <svg id="svg6" className="point">
                <g id="line6" >
                <ellipse id="path6" ry="30" rx="30" cy="35.4375" cx="35" stroke-width="1.5" stroke="#ff0000" fill="#ff0000"/>
                </g>
            </svg>

            <svg id="svg7" width="700" height="800" xmlns="http://www.w3.org/2000/svg">

                <g id="line7" >
                <path id="path7" d="m283.666486,258.666318c-31.999814,64.66629 -28.6665,-4.66664 -29.001897,-4.667806c10.335339,-68.665102 -51.664301,-55.998508 -51.999696,-55.999672c-7.874696,-4.24983 -13.910893,-5.051781 -18.872911,-3.659753c-4.962017,1.392028 -8.849855,4.978036 -12.42783,9.504124c-7.15595,9.052176 -13.072454,21.864675 -23.864057,28.406303c-21.583207,13.083257 -62.666815,1.083035 -62.83451,1.082452c-62.330913,-37.33195 -28.331111,-86.664997 -28.666499,-86.666159c57.001725,-4.665478 64.335016,-47.998559 63.999625,-47.999719c-2.33126,-74.665073 70.334984,-35.331968 69.99959,-35.333126c30.33522,42.000914 17.001964,86.000658 16.666569,85.999496c41.001825,-9.99878 47.668453,-56.665175 47.333056,-56.666334c21.001944,1.334485 19.668618,-49.998551 19.33322,-49.999708c45.001805,2.667808 23.001933,57.334157 22.666534,57.332998" opacity="1" stroke-width="4" stroke="#7fff00" fill="none"/>
                </g>
            </svg>
        </div>

      </div>
    );
  }
}
