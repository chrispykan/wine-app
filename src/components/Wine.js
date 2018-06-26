import React, { Component } from 'react';
import WineForm from './WineForm.js'

class Wine extends Component {
  constructor() {
    super();
    this.deleteClickedWine = this.deleteClickedWine.bind(this);
    this.editClickedWine = this.editClickedWine.bind(this);
  }
  deleteClickedWine() {
    this.props.onDeleteWine(this.props.wine);
  }
  editClickedWine() {
    this.props.onEditWine(this.props.wine);
}
  render() {
    return(
      <p data-wines-index={this.props.wine._id}>
        <span onClick={this.editClickedWine}>
          {this.props.wine.name}
        </span>
        {this.props.editingWineId === this.props.wine._id ? 
          <WineForm
            autoFocus={true}
            buttonName="Update Wine!"
            onUpdateWine={this.props.onUpdateWine} 
          /> : "" }

        <span 
        className="deleteButton"
        onClick={ this.deleteClickedWine }>
        (x)
        </span>
      </p>
    )
  }
}

export default Wine

