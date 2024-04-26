import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: '/api', 
  timeout: 5000, 
});

export default AxiosInstance;
