import CarController from "./components/Car/CarController.js";
import JobController from "./components/Job/JobController.js";
import PropController from "./components/Property/PropertyController.js";

class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            jobController: new JobController(),
            propController: new PropController()
        }
    }
}

window['app'] = new App()