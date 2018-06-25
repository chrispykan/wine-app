import React, { Component } from 'react';

class Wine extends Component {
  render() {
    return(
      <p data-wines-index={this.props.wine.id}>
        <span>{this.props.wine.name}</span>
      </p>
    )
  }
}

export default Wine

