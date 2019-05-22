export default class Property {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }
  get Template() {
    return `
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} bedroom ${this.bathrooms} bath</h5>
                    <h5 class="card-title">$${this.price.toFixed(2)}</h5>
                    <p class="card-text">Built in ${this.year}. ${this.levels} stories. ${this.description}</p>
                    <button class="btn btn-primary" onclick="app.controllers.propController.bid('${this._id}')">Contact Seller</button>
                    <button class="btn btn-danger" onclick="app.controllers.propController.delete('${this._id}')">Remove Listing</button>
                </div>
            </div>
        </div>
        `
  }
}