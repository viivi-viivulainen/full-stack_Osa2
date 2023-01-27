import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const get = () => {
  return axios.get(baseUrl)
}

const add = newPerson => {
  return axios.post(baseUrl, newPerson)
}

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
}

const deletet = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  get: get, 
  add: add, 
  update: update, 
  deletet: deletet
}