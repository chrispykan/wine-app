import React, { Component } from 'react'

class WineForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      wine: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
    var wine = this.state.wine
    this.props.onUpdateWine(wine)
    this.setState({
      wine: ""
    })
  }

  render() {
    return (
      <div className="WineForm">
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="Add a wine here..."
            type="text"
            value={(this.state && this.state.wine || "")}
          />
          <button type='submit'>{this.props.buttonName}</button>

        </form>
      </div>
    )
  }
}

export default WineForm