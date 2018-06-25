import axios from 'axios'

class WineModel {
  static all(){
    let request = axios.get("https://super-crud-api.herokuapp.com/api/wines")
    return request
  }
}

export default WineModel
