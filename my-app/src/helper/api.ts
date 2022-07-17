import axios from 'axios'

const token = localStorage.getItem('token')

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://dev.xmint.co/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` }
  })
  return axiosInstance
}
export default apiClient