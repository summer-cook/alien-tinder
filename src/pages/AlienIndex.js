import React, { Component } from 'react'
import { Card, CardTitle, CardImg } from 'reactstrap'
import { NavLink } from 'react-router-dom'



class AlienIndex extends Component { 
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {


  return (
    <div className= 'main-container'>
      <center>
          <h2>y0ur matches!</h2>
            <br />
              {/* <Col sm="6"> */}
              <div className = "matches-container">
                { this.props.aliens.map((alien, index) => {
                  return (
                    <Card 
                    body key={ index } 
                    className= "match-card">
                      <CardTitle>
                        <h4>
                          <NavLink 
                          className= 'profile-link'
                          to={`/alienshow/${alien.id}`}
                          >
                          { alien.name }
                          </NavLink>
                        </h4>
                        <a href= {`/alienshow/${alien.id}`}>
                        <CardImg alt = "find ur perfect alien match" src = { alien.img } />
                        </a>
                      </CardTitle>
                    </Card>
                  )
                })}
                </div>
              {/* </Col> */}
      </center>
    </div>
      );
    }
 }
export default AlienIndex;
