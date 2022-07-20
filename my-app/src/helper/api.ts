import axios from 'axios'

const access_token = localStorage.getItem('access_token')

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: '/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
    }
  })
  return axiosInstance
}
export default apiClient