import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const mockDataBaseUrl = '/mockData/mockData.json';

const ApiAxiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

const MockDataAxiosInstance = axios.create({
  baseURL: mockDataBaseUrl,
});

export { ApiAxiosInstance, MockDataAxiosInstance };
