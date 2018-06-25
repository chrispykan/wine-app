import React, { Component } from 'react';
import WineModel from '../models/Wine.js'
import Wines from '../components/WineList.js'


class WinesContainer extends Component {
  constructor(){
    super()
    this.state = {
      wines: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    WineModel.all().then( (res) => {
      this.setState ({
        wines: res.data.wines,
        wine: ''
      })
    })
  }
  render(){
    return (
      <div className="winesComponent">
        <Wines
          wines={this.state.wines} />
      </div>
    )
  }
}


export default WinesContainer