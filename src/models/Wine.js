import axios from 'axios'

class WineModel {
  static all(){
    let request = axios.get(`https://super-crud-api.herokuapp.com/api/wines`)
    return request
  }
  static create(wine) {
    let request = axios.post(`https://super-crud-api.herokuapp.com/api/wines`, wine)
    return request
  }
  static delete(wine) {
    let request = axios.delete (`https://super-crud-api.herokuapp.com/api/wines/${wine._id}`)
    return request
  }
}

export default WineModel
