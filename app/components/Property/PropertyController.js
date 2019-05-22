import PropService from "./PropertyService.js";

//Private
let _propService = new PropService()

function _drawProps() {
  let props = _propService.Properties
  let template = ''
  props.forEach(p => {
    template += p.Template
  })
  document.getElementById('listings').innerHTML = template
}

function _drawForm() {
  document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.propController.addProp(event)">
    <div class="form-group col-4">
        <label for="bedrooms">bedrooms</label>
        <input type="text" class="form-control" id="bedrooms" name="bedrooms" placeholder="Enter bedrooms" required>
    </div>
    <div class="form-group col-4">
        <label for="bathrooms">bathrooms</label>
        <input type="text" class="form-control" id="bathrooms" name="bathrooms" placeholder="Enter bathrooms"
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
        <label for="levels">Levels</label>
        <input type="number" class="form-control" id="levels" name="levels" placeholder="Enter levels"
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
export default class PropController {
  constructor() {
    //register subscribers
    _propService.addSubscriber('properties', _drawProps)

  }

  renderProps() {
    _drawForm();
    _propService.getAllProps() //get data
  }

  addProp(event) {
    event.preventDefault();
    let form = event.target
    let propData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      levels: form.levels.value
    }
    _propService.addProp(propData)
    form.reset()
  }

  bid(id) {
    _propService.bid(id)
  }

  delete(id) {
    _propService.delete(id)
  }


}