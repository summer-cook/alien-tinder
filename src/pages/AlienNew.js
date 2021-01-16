import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

 class AlienNew extends Component {  
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
  this.props.createNewAlien(this.state.form)
  this.setState ({success: true})
}

render()  {


  return (
    <div className= 'main-container'>
      <center>
        <h2>create a new pr0file</h2>
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
            <Label>image: paste URL here with .png or .jpg extension</Label>
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
          j0in us
        </Button>
      </Form>
      </center>
      { this.state.success && <Redirect to="/alienindex" />}
    </div>
      );
    }
 }
export default AlienNew;
