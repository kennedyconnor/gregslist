import Car from "../../models/Car.js";

//Private
let _carApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars'
})


let _state = {
    cars: []
}

let _subscribers = {
    cars: []
}

function _setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}


//Public
export default class CarService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Cars() {
        return _state.cars.map(c => new Car(c))
    }

    getAllCars() {
        _carApi.get() // get the cars
            .then(response => {
                let data = response.data.data.map(d => new Car(d))
                _setState('cars', data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    addCar(carData) {
        _carApi.post('', carData)
            .then(res => {
                this.getAllCars()
            })
            .catch(err => console.error(err))
    }

    bid(id) {
        let carToBidOn = _state.cars.find(c => c._id == id)
        carToBidOn.price++
        _carApi.put(id, carToBidOn)
            .then(res => {
                this.getAllCars()
            })
    }

    delete(id) {
        _carApi.delete(id)
            .then(res => {
                this.getAllCars()
            })
    }

}

