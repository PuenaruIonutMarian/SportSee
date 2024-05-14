import {ApiService} from '../ApiService/ApiService';
import {MockService} from '../MockService/MockService';
import { isUsingMockData } from '../../config/AppConfig';

class DataService {
  constructor() {
    this.service = isUsingMockData ? new MockService() : new ApiService();
  }

  async getUserData(userId) {
    return await this.service.getUserData(userId);
  }

  async getUserActivity(userId) {
    return await this.service.getUserActivity(userId);
  }

  async getUserAverageSessions(userId) {
    return await this.service.getUserAverageSessions(userId);
  }

  async getUserPerformance(userId) {
    return await this.service.getUserPerformance(userId);
  }
}


export {DataService};