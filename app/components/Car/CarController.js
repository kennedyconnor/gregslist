import CarService from "./CarService.js";

//Private
let _carService = new CarService()

function _drawCars() {
    let cars = _carService.Cars
    let template = ''
    cars.forEach(car => {
        template += car.Template
    })
    document.getElementById('listings').innerHTML = template
}

function _drawForm() {
    document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.carController.addCar(event)">
    <div class="form-group col-4">
        <label for="make">Make</label>
        <input type="text" class="form-control" id="make" name="make" placeholder="Enter Make" required>
    </div>
    <div class="form-group col-4">
        <label for="model">Model</label>
        <input type="text" class="form-control" id="model" name="model" placeholder="Enter Model"
            required>
    </div>
    <div class="form-group col-4">
        <label for="year">Year</label>
        <input type="number" class="form-control" id="year" name="year" placeholder="Enter Year"
            required>
    </div>
    <div class="form-group col-4">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" name="price" placeholder="Enter Price"
            required>
    </div>
    <div class="form-group col-4">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" name="description"
            placeholder="Enter Description">
    </div>
    <div class="form-group col-4">
        <label for="imgUrl">Image</label>
        <input type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="Enter Image Url"
            required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`
}


//Public
export default class CarController {
    constructor() {
        //register subscribers
        _carService.addSubscriber('cars', _drawCars)

    }

    renderCars() {
        _drawForm();
        _carService.getAllCars() //get data
    }

    addCar(event) {
        event.preventDefault();
        let form = event.target
        let carData = {
            make: form.make.value,
            model: form.model.value,
            imgUrl: form.imgUrl.value,
            year: form.year.value,
            price: form.price.value,
            description: form.description.value,
        }
        _carService.addCar(carData)
        form.reset()
    }

    bid(id) {
        _carService.bid(id)
    }

    delete(id) {
        _carService.delete(id)
    }


}