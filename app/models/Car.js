export default class Car {
    constructor(data) {
        this._id = data._id
        this.make = data.make
        this.model = data.model
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description || 'No Description Provided'
    }

    get Template() {
        return `
        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.make} - ${this.model} - ${this.year}</h5>
                    <h5 class="card-title">$${this.price.toFixed(2)}</h5>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-primary" onclick="app.controllers.carController.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.carController.delete('${this._id}')">Delete</button>
                </div>
            </div>
        </div>
        `
    }
}
