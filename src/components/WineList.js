import React, { Component } from 'react';
import Wine from './Wine.js';

class Wines extends Component {
  render(){
    let wines = this.props.wines.map( (wine) => {
      return (
        <Wine
        key={wine._id}
        wine={wine}
        onDeleteWine={this.props.onDeleteWine}
        />
      )
    })
    return(
      <div className="wines">
        { wines }
      </div>
    )
  }
}

export default Wines
