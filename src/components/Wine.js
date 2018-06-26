import React, { Component } from 'react';

class Wine extends Component {
  constructor() {
    super();
    this.deleteClickedWine = this.deleteClickedWine.bind(this);
  }
  deleteClickedWine() {
    this.props.onDeleteWine(this.props.wine);
  }
  
  render() {
    return(
      <p data-wines-index={this.props.wine._id}>
        <span>{this.props.wine.name}</span>
        <span 
        className="deleteButton"
        onClick={this.deleteClickedWine}>
        (x)
        </span>
      </p>
    )
  }
}

export default Wine

