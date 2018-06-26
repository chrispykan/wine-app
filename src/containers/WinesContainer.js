import React, { Component } from 'react';
import WineModel from '../models/Wine.js'
import Wines from '../components/WineList.js'
import CreateWineForm from '../components/CreateWineForm.js'


class WinesContainer extends Component {
  constructor(){
    super()
    this.state = {
      wines: []
    }
    this.createWine = this.createWine.bind(this);
    this.deleteWine = this.deleteWine.bind(this);
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
  createWine(wine) {
    let newWine = {
      name: wine
    }
    WineModel.create(newWine).then((res) => {
      let wines = this.state.wines
      let newWines = wines.push(res.data)
      this.setState({newWines})
    })
  }
  deleteWine(wine) {
    WineModel.delete(wine).then((res) => {
      let wines = this.state.wines.filter(function(wine) {
        return wine._id !== res.data._id
      });
      this.setState({wines})
    })
  }
  render(){
    return (
      <div className="winesComponent">
        <Wines
          wines={this.state.wines}
          onDeleteWine={this.deleteWine} />
          <CreateWineForm
            createWine={this.createWine}/>
      </div>
    )
  }
}


export default WinesContainer