import Property from "../../models/Property.js"

//private
let _propApi = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})

let _state = {
  properties: []
}
let _subscribers = {
  properties: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//public

export default class PropService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Properties() {
    return _state.properties.map(p => new Property(p))
  }


  getAllProps() {
    _propApi.get()
      .then(response => {
        console.log(response)
        let propData = response.data.data.map(p => new Property(p))
        _setState('properties', propData)
      })
      .catch(err => console.error(err))
  }

  addProp(propData) {
    _propApi.post('', propData)
      .then(res => this.getAllProps())
      .catch(err => console.error(err))
  }

  bid(id) {
    let propToBidOn = _state.properties.find(c => c._id == id)
    propToBidOn.price++
    _propApi.put(id, propToBidOn)
      .then(res => {
        this.getAllProps()
      })
  }

  delete(id) {
    _propApi.delete(id)
      .then(res => this.getAllProps())
  }

}