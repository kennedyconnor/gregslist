export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get Template() {
    return `
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.jobTitle} - ${this.company}</h5>
                    <h5 class="card-title">$${this.rate}/hour - ${this.hours} hours/week</h5>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-primary" onclick="app.controllers.jobController.apply()">Apply</button>
                    <button class="btn btn-danger" onclick="app.controllers.jobController.delete('${this._id}')">Remove</button>
                </div>
            </div>
        </div>
        `
  }
}