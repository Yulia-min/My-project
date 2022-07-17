import axios from 'axios'

<<<<<<< HEAD
const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: '/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
    }
=======
const token = localStorage.getItem('token')

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://dev.xmint.co/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` }
>>>>>>> 3f74201 (add forms)
  })
  return axiosInstance
}
export default apiClient