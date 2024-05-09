import { ApiAxiosInstance, MockDataAxiosInstance } from '../AxiosInstance/AxiosInstance';
import { isUsingMockData } from '../../services/DataService/DataService';

export class BaseService {
  async fetchData(endpoint) {
    try {
      const response = await (isUsingMockData ? MockDataAxiosInstance : ApiAxiosInstance).get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Error while retrieving data from ${endpoint}`, error);
      throw error;
    }
  }
}
