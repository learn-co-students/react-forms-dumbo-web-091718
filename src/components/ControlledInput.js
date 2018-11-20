// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(){
    super()
    this.state ={
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: ""
    })
  }

  render() {
    return (
       
        <form >
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <input type="submit" value="submit"/>
        </form>
    )
  }
}
