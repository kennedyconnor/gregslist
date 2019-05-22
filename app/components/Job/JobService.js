import Job from "../../models/Job.js"

//private
let _jobApi = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

let _states = {
  jobs: []
}
let _subscribers = {
  jobs: []
}

function _setState(prop, data) {
  _states[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//public

export default class JobService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Jobs() {
    return _states.jobs.map(job => new Job(job))
  }


  getAllJobs() {
    _jobApi.get()
      .then(response => {
        console.log(response)
        let jobData = response.data.data.map(job => new Job(job))
        _setState('jobs', jobData)
      })
      .catch(err => console.error(err))
  }

  addJob(jobData) {
    _jobApi.post('', jobData)
      .then(res => this.getAllJobs())
      .catch(err => console.error(err))
  }

  apply() {
    alert('application forwarding stil WIP!')
  }

  delete(id) {
    _jobApi.delete(id)
      .then(res => this.getAllJobs())
  }

}