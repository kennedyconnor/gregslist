import JobService from "./JobService.js"

//private
let _jobService = new JobService()

function _drawJobs() {
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => template += job.Template)
  document.getElementById('listings').innerHTML = template
}

function _drawForm() {
  document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.jobController.addJob(event)">
    <div class="form-group col-4">
        <label for="company">Company</label>
        <input type="text" class="form-control" id="company" name="company" placeholder="Enter company" required>
    </div>
    <div class="form-group col-4">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" name="title" placeholder="Enter title"
            required>
    </div>
    <div class="form-group col-4">
        <label for="hours">Hours</label>
        <input type="number" class="form-control" id="hours" name="hours" placeholder="Enter hours"
            required>
    </div>
    <div class="form-group col-4">
        <label for="rate">Rate</label>
        <input type="number" class="form-control" id="rate" name="rate" placeholder="Enter rate"
            required>
    </div>
    <div class="form-group col-4">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" name="description"
            placeholder="Enter Description">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`
}

//public

export default class JobController {
  constructor() {
    _jobService.addSubscriber('jobs', _drawJobs)
    // _jobService.getAllJobs()
  }

  renderJobs() {
    _drawForm()
    _jobService.getAllJobs()
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let jobData = {
      company: form.company.value,
      jobTitle: form.title.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(jobData)
  }

  apply() {
    _jobService.apply()
  }

  delete(id) {
    _jobService.delete(id)
  }
}