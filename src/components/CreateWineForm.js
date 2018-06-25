import React, { Component } from 'react';
 class CreateWineForm extends Component {
   constructor() {
    super()
    this.state = {
      wine: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
   }
  onInputChanges(e){
    this.setState({
      wine: e.target.value
    })
  } 

  onFormSubmit(e){
    e.preventDefault()
    let wine = this.state.wine
    this.props.createWine(wine)
    this.state.setState({
       wine: ''
    })
  }
  render() {
    return(
      <div className="createForm wineForm">
        <h2> Create Wine Here!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input 
          onChange={ this.onInputChange }
          placeholder="Add a wine here..."
          type='text'
          value={ this.state.wine} />
          <button type="submit">Create Wine!</button>
        </form>
      </div>
    )
  }
 }

 export default CreateWineForm