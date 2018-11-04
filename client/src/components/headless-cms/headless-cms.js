import React, { Component } from 'react';
import Butter from 'buttercms';
import {Button, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image, Alert} from 'react-bootstrap'

import './headless-cms.css';

const butter = Butter('3e11b319b0cf5eb7da220e963cbc68be7d774306');

export default class Headless extends Component {

    constructor(props){
    super(props);
    this.state = {
      all: [],
      loaded: false,
      }
    }

scroll(){
    window.scrollBy({ 
      top: 700, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }

  scrollTop(){
    window.scroll({ 
      top: -1200, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
  }

    componentDidMount(){
        var self = this;
        butter.page.retrieve('*', 'petr-hoskovec-introduction').then(function(response) {
        self.setState({loaded: true,
                          all: response.data.data.fields })
                    })
                }


  render() {
const navbar = {backgroundColor: 'transparent'};

    
    return (
      <div className="Head">

<Navbar staticTop inverse collapseOnSelect style={navbar} >
  <Navbar.Header  >
    <Navbar.Brand>
      <a href="https://thawing-scrubland-65559.herokuapp.com/">P. Hoskovec Presentation</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="https://buttercms.com/react-cms/">
        Headless Butter CMS
      </NavItem>
            <NavDropdown eventKey={3} title='Menu' id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Introduction </MenuItem>
        <MenuItem eventKey={3.2}>CMS Interface</MenuItem>
        <MenuItem eventKey={3.3}>Diagram</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>About</MenuItem>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>

      <Alert id="alert" bsStyle="warning">
        {this.state.all.banner}..!
      </Alert>

    <header className="Headless-header">
        <h1>
          {this.state.all.header1}
          </h1>
      <p>
        {this.state.all.paragraph1}
      </p>
      <Image id="image" src={this.state.all.image1} />
      <Button bsStyle="info" bsSize="large" id="headless-button" onClick={this.scroll.bind(this)} > Next </ Button>

    </header>

    <header className="Headless-header">
        <h1>
          {this.state.all.header2}
        </h1>
         <p>
          {this.state.all.paragraph2}
        </p>
        <Image id="image" src={this.state.all.image2} />
        <Button id="headless-button" bsStyle='success' bsSize="large" onClick={this.scrollTop.bind(this)} > Scroll UP </Button>
    </header>

      </div>
    );
  }
}

