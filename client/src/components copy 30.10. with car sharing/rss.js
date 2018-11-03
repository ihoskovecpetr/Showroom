//@ts-check

import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Row , Col , Image , ListGroup , Button , ListGroupItem, FormControl } from 'react-bootstrap';
import BlurImageLoader from 'react-blur-image-loader';

import './rss.css';


export default class RSS extends Component {

    constructor(props) {
    super(props);
    this.state =  { 
      users: [],
      img: [],
      text: [],
      pocet: 30,
      url: 'https://api-dev.hugport.com/services/rss?q=http://www.blesk.cz/rss',
      isLoaded: false,
    };
}


 componentDidMount(){

 setTimeout(this.setState({position: 1}), 3000);

 fetch(this.state.url , { method: 'get', mode: 'cors',  headers: {
           Accept: 'application/json',
   'Content-Type': 'application/json',
                  } })
      .then(resp => resp.json())
        .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('XXX  -- ', response);
        const {users, obrazky} = this.state;

        // Re-working data from API -----   

        let i;
        for (i = 0; i < this.state.pocet ; i++) { 
            let newItem = response.responseData.feed.entries[i].title;
            console.log('Titulka:', newItem);
            let newItem2 = response.responseData.feed.entries[i].content;
            console.log('Obraz + text', newItem2);

            var str = newItem2;
            var result = str.split('"');
            var result2 = result[1].split(">");
            console.log(" Split jen IMG " + result2[0] + " Split jen IMG ");

            var body = newItem2;
            var bodys = str.split('>');
            console.log(" Split jen BODY " + bodys[1] + " Split jen BODY ");

            // Saving worked thru data -----
             this.setState({
              users: [...this.state.users, newItem],
                  img: [...this.state.img, result2[0] ],
                text: [...this.state.text, bodys[1]],
                isLoaded: true,
            })
        }

    });

} 


rendrujmapu() {

return _.map(this.state.users, (dataDB, index) => {return <div>
    <Row>

      <Col xs={12} md={6} className="img" >
          <BlurImageLoader    src={this.state.img[index]} 
                              fullCover={true}
                              maxBlurLevel={25}
                              transitionTime={900000}/>

          <div className="top-img" >
            <span className="helper"></span><img src={this.state.img[index]}  />
          </div>
      </Col>

      <Col xs={12} md={6} className="txt" >

          <div className="top-txt" >
            <span className="helper"></span><p>{this.state.users[index]}</p>
          </div>
          <div className="mid-txt" >
            <span className="helper"></span><p>{this.state.text[index]}</p>
          </div>
          <div className="end-txt" >
            <span className="helper"></span>
            <img src="https://png.icons8.com/ios/80/000000/cheese.png" />
            <p>by Design Milk</p>
          </div>

      </Col>

    </Row> 
    </div> });
   }  

//
renderAkciSekce() {

    if (!this.state.isLoaded) {
            return (  
                <Button bsStyle="info" >Wait please</Button>
                );
        }             
        return (
                <Button bsStyle="success" >RSS feed Loaded</Button>
                );
        }
//
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center" >
       <Grid>
          <Row className="show-grid">
                <Col xs={12} md={12}>
                    {this.renderAkciSekce()}
                </Col>    
                      }    //DEL --???
          </Row>
          
          <Row className="show-grid" >
             {this.rendrujmapu()}  
          </Row>
        </Grid>
      </div>
    </div>
  </div>
    );
  }
}

