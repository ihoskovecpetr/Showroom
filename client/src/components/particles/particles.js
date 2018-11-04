import React, { Component } from 'react';
import { Button , ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import Particles from 'react-particles-js';

import './particles.css';

export default class particles extends React.Component {

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
                backgroundColor: "#00d8ff",
                top: -95,
                position: "relative",
                zIndex: -2,
                height: '600px',
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
    </div>
  );
}
}
