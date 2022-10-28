import axios from "axios"

const URL = 'https://amazing-events.herokuapp.com/api/events'

export function obtainEvents() {
    return axios.get(URL)
}