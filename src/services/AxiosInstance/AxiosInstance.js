import axios from 'axios'

// URL de base de l'API
// const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const apiBaseUrl = 'http://localhost:3000/'
// URL de base des données simulées
const mockDataBaseUrl = '/mockData/mockDatas.json'

// Instance Axios pour l'API réelle
const ApiAxiosInstance = axios.create({
  baseURL: apiBaseUrl,
})

// Instance Axios pour les données simulées
const MockDataAxiosInstance = axios.create({
  baseURL: mockDataBaseUrl,
})

// Export des instances Axios
export { ApiAxiosInstance, MockDataAxiosInstance }
