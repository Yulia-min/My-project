import axios from 'axios'

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: '/api/v1/',
    responseType: 'json',
    headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
    }
  })
  return axiosInstance
}
export default apiClient