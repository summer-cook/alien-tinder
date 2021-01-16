import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AlienEdit from './pages/AlienEdit';
import AlienIndex from './pages/AlienIndex';
import AlienNew from './pages/AlienNew';
import AlienShow from './pages/AlienShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

 class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      aliens: []
    }
  } 

  componentDidMount(){
    this.alienIndex()
  }

  alienIndex = () => {
    fetch("https://cat-tinder-backend-alan-summer.herokuapp.com/aliens")
    .then(response => {
      return response.json()
    })
    .then(aliensArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ aliens: aliensArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }


createNewAlien = (newalien) => {
  return fetch("https://cat-tinder-backend-alan-summer.herokuapp.com/aliens", {
    // converting an object to a string
    body: JSON.stringify(newalien),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => {
    if(response.status === 422){
      alert("Please check your submission.")
    }
    return response.json()
  })
  .then(payload => {
    this.alienIndex()
  })
  .catch(errors => {
    console.log("create errors:", errors)
  })
}

updateAlien = (alien, id) => {
  return fetch(`https://cat-tinder-backend-alan-summer.herokuapp.com/aliens/${id}`, {
    // converting an object to a string
    body: JSON.stringify(alien),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
  .then(response => {
    if(response.status === 422){
      alert("Please check your submission.")
    }
    return response.json()
  })
  .then(payload => {
    this.alienIndex()
  })
  .catch(errors => {
    console.log("update errors:", errors)
  })
}

deleteAlien = (id) => {
  return fetch(`https://cat-tinder-backend-alan-summer.herokuapp.com/aliens/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => {
    return response.json()
  })
  .then(payload => {
    this.alienIndex()
  })
  .catch(errors => {
    console.log("delete errors:", errors)
  })
}

render()  {


  return (
    <div className= 'app-js-div'>
      <Header/> 
      <Router>
  <Switch>
    <Route 
      exact path="/" 
      component={ Home } 
    />
    <Route 
      path="/alienindex"
      render= { (props) => 
        <AlienIndex 
          aliens= { this.state.aliens } 
        /> 
      } 
    />
    <Route 
      exact path={"/alienshow/:id"}
      render={ (props) => {
      let id = props.match.params.id
      let alien = this.state.aliens.find(alien => alien.id === parseInt(id))
      return ( this.state.aliens.length > 0 &&
        <AlienShow
          alien={ alien }
          deleteAlien={ this.deleteAlien }
        />
      )
    }}
  />
    <Route
      path="/aliennew"
      render={ (props) => 
      <AlienNew 
        createNewAlien=
        { this.createNewAlien }
        /> }
    />

    <Route
      exact path={"/alienedit/:id"}
      render={ (props) => {
      let id = props.match.params.id
      let alien = this.state.aliens.find(alien => alien.id === parseInt(id))
      return(
        <AlienEdit
          updateAlien={ this.updateAlien }
          alien={ alien }
        />
    )
  }}
/>
    <Route component={ NotFound }/>
  </Switch>
</Router>
<Footer/>
    </div>
      );
    }
 }
export default App;
