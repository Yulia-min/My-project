import axios from 'axios'

<<<<<<< HEAD
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

=======
>>>>>>> c0933a2 (add request)
const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: '/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
<<<<<<< HEAD
        Authorization: `Bearer ${token}` }
>>>>>>> 3f74201 (add forms)
=======
    }
>>>>>>> c0933a2 (add request)
  })
  return axiosInstance
}
export default apiClient