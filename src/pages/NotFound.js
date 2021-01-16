import React, { Component } from 'react'
import BlackHole from '../assets/blackhole.png'
 class NotFound extends Component {  
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {


  return (
    <>
    <div className= 'main-container'>
    <div className= 'homecontainer'>
      <div className= 'herotext'>
      <h1>y0u entered a black h0le</h1>
      <a href= "/">
      <button className= 'button'>
        ET ph0ne h0me
        </button>
      </a>
    </div>
      <img className= 'blackhole' src = { BlackHole }></img>
    </div>
    </div>
    </>
      );
    }
 }
export default NotFound;
