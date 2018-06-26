import React, { Component } from 'react';
import WineModel from '../models/Wine.js'
import Wines from '../components/WineList.js'
import CreateWineForm from '../components/CreateWineForm.js'


class WinesContainer extends Component {
  constructor(){
    super()
    this.state = {
      wines: [],
      editingWineId: null,
      editing: false
    }
    this.createWine = this.createWine.bind(this);
    this.deleteWine = this.deleteWine.bind(this);
    this.updateWine = this.updateWine.bind(this);
    this.editWine = this.editWine.bind(this);
    
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
  updateWine(wineName) {
    var wineId = this.state.editingWineId
    function isUpdatedWine(wine) {
      return wine._id === wineId;
    }
  WineModel.update(wineId, wineName).then((res) =>{
    let wines = this.state.wines
    wines.find(isUpdatedWine).name = wineName
    this.setState({wines: wines, editingWineId: null, editing: false})
  })
  }
  editWine(wine) {
    this.setState({
      editingWineId: wine._id,
      editing: true
    })
  }
  render(){
    return (
      <div className="winesContainer">
        <h2>This is the Wines Container</h2>
        <Wines
          wines={this.state.wines}
          editingWineId={this.state.editingWineId}
          onEditWine={this.editWine}
          onDeleteWine={this.deleteWine} 
          onUpdateWine={this.updateWine} />
        <CreateWineForm
          createWine={this.createWine}/>
      </div>
    )
  }
  }


export default WinesContainer