import React, { Component } from 'react';
import { Button , ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import Animate from "react-move/Animate";
import Particles from 'react-particles-js';

import './react-move.css';

export default class ReactMove extends React.Component {

  constructor(){
    super();
    this.state = {
      show: 30,
      bool: 10,
    }
  }

  updateShow = () => {
    this.setState(prev => ({ show: prev.show + 5 }));
  };

  updateBool = () => {
    this.setState(prev => ({ bool: prev.bool + 5 }));
  };

  check = () => {
    this.setState(prev => ({ bool: 10, show: 20}));

  };

  componentDidMount(){

}
 
  
render() {
  const {
    updateShow,
    updateColor,
    state: { show }
  } = this;

  return (
    <div>
      <div id="info">
          <ButtonToolbar>
        <ButtonGroup bsSize="large">
        <Button bsStyle="success" onClick={this.updateShow.bind(this)} >ADD points</Button>
          <Button bsStyle="warning"  onClick={this.updateBool.bind(this)} >ADD speed by 5</Button>
          <Button bsStyle="info" onClick={this.check.bind(this)} >Reset</Button>
        </ButtonGroup>
      </ButtonToolbar>
        <p>Number of points: <b>{this.state.show}</b> Speed: <b>{this.state.bool}</b></p>
      </div>
            <Particles 
            id="particles"
              params={{
            		particles: {
                  number: {
                    value: this.state.show,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
            			line_linked: {
            				shadow: {
            					enable: false,
            					color: "#3CA9D1",
            					blur: 5
            				}
                  },
                  size: {
                    value: 10,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 80,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  move: {
                    enable: true,
                    speed: this.state.bool,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      }
                    }
                  }
                  
            		}
            	}}
              style={{
                backgroundColor: "firebrick",
                top: -95,
                position: "relative",
                zIndex: -2,
              }}
            />

            <div id="loginParticles">
              <form>
                <div>
                  <label for="username">Username</label>
                  <br />
                <input type="text" placeholder="Username" />
                </div>

                <div>
                  <label for="password">Password</label>
                  <br />
                  <input type="password" />
                  </div>
                  <Button bsStyle="primary">Login</Button>
              </form>
             </div>

      <button onClick={updateShow}>Toggle</button>
      <Animate
        show={show}
        start={{
          opacity: 0,
          width: 10,
          backgroundColor: "#0000ff"
        }}
        enter={{
          opacity: [1],
          width: 300,
          backgroundColor: ["#00ff00"],
          timing: { duration: 2000 }
        }}
        update={{
          // catch interrupts e.g. click button in middle of leave
          opacity: [1],
          width: 600,
          backgroundColor: ["#992200"],
          timing: { duration: 2000 }
        }}
        leave={{
          opacity: [0.5],
          width: 10,
          backgroundColor: ["#ff0000"],
          timing: { duration: 2000 }
        }}
      >
        {({ opacity, backgroundColor, width }) => {
          return (
            <div
              style={{
                opacity,
                width,
                height: 200,
                marginTop: 10,
                color: "white",
                backgroundColor
              }}
            >
              {opacity.toFixed(3)}
            </div>
          );
        }}
      </Animate>
      <hr />
      <a href="https://react-move.js.org/#/">React-Move Documentation</a>
    </div>
  );
}
}
