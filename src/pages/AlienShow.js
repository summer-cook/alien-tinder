import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Button, Row } from 'reactstrap'
import { NavLink, Redirect } from 'react-router-dom'

 class AlienShow extends Component {  
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {
  console.log(this.props.alien)

  return (
    <div>
      <center>
      <Col sm="6" id="show-body" className= 'main-container'>
  <Card body >
    <CardTitle>my people call me
      <br></br>
      <h2><b>{ this.props.alien.name }</b></h2>
      </CardTitle>
      <div className= "alien-prof-image-wrapper">
      <img className="img-fluid" alt = "find ur perfect alien match" src = { this.props.alien.img } ></img>
      </div>
    <CardText>
      <h3><b>{ this.props.alien.distance } lightyears away</b></h3>
      hails from { this.props.alien.planet }.</CardText>
      <Row>
        <Col xs="6">
          <NavLink
            to={`/alienedit/${this.props.alien.id}`}
          >
            <Button outline color="info" size="lg">
            edit pr0file
            </Button>
          </NavLink>
      </Col>
      <Col xs="6">
      <NavLink to= '/alienindex'>
          <Button 
            outline color="info" 
            size="lg"
            onClick={() => this.props.deleteAlien(this.props.alien.id) }
            >
              delete pr0file
          </Button>
      </NavLink>
      </Col >
      </Row>
      </Card>
    </Col>
    </center>
    </div>
      );
    }
 }
export default AlienShow;
