import React, { Component } from 'react'
import HotFemaleAlien from '../assets/hotfemalealien.png'
import { Col, Row } from 'reactstrap'

 class Home extends Component {  
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {


  return (
    <>
    
    <div className= 'main-container'>
    <Row>
    <Col>
      <div className= 'hot-alien-image-wrapper'>
          <img className= 'hot-alien-image' src = { HotFemaleAlien }></img>
      </div>
    </Col>
    <Col>
      <div className= 'herotext'>
        <center>
        <h1>meet h0t single aliens in y0ur galaxy</h1>
        <button className= 'button'>
          <a href='/AlienNew'>
            l0g in
          </a>
        </button>
        <button className= 'button'>
          <a href="/alienindex">
            see what's 0ut there
          </a>
        </button>
        </center>
      </div>
    </Col>

    </Row>
    </div>
    
    </>
      );
    }
 }
export default Home;
