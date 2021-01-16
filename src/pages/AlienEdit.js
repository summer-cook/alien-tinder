import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
import { Redirect } from 'react-router-dom'

 class AlienEdit extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        distance: "",
        planet: ""
      },
    success: false
    }
  } 

handleChange = (e) => {
  // destructuring form out of state
  let { form } = this.state
  form[e.target.name] = e.target.value
  // setting state to the updated form
  this.setState({ form: form })
}

handleSubmit = (e) => {
  // keeps react from refreshing the page unnecessarily
  e.preventDefault()
  // a function call being passed from App.js
  this.props.updateAlien(this.state.form, this.props.alien.id)
  this.setState({ success: true })
}


render()  {


  return (
    <div className= 'main-container'>
      <center>
      <h2>edit y0ur pr0file</h2>
       <Form className= 'profile-form'>
        <FormGroup>
            <Label>name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
        </FormGroup>
        <FormGroup>
            <Label>distance (lightyears)</Label>
            <Input
              type="number"
              name="distance"
              onChange={ this.handleChange }
              value={ this.state.form.distance }
            />
        </FormGroup>
        <FormGroup>
            <Label>planet</Label>
            <Input
              type="text"
              name="planet"
              onChange={ this.handleChange }
              value={ this.state.form.planet }
            />
        </FormGroup>
        <FormGroup>
            <Label>image<br></br>
              paste URL here with .png or .jpg extension</Label>
            <Input
              type="text"
              name="img"
              onChange={ this.handleChange }
              value={ this.state.form.img }
            />
        </FormGroup>

        <Button
          name="submit"
          color="secondary"
          onClick={ this.handleSubmit }
        >
          edit pr0file
        </Button>
        
      </Form>
      </center>
      { this.state.success && <Redirect to={ `/alienshow/${this.props.alien.id}` }/> }
    </div>
      );
    }
 }
export default AlienEdit;
