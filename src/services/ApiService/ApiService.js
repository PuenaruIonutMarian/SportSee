import {BaseService} from '../BaseService/BaseService';


export class ApiService extends BaseService {
  async getUserData(userId) {
    return await this.fetchData(`/user/${userId}`);
  }

  async getUserActivity(userId) {
    return await this.fetchData(`/user/${userId}/activity`);
  }

  async getUserAverageSessions(userId) {
    return await this.fetchData(`/user/${userId}/average-sessions`);
  }

  async getUserPerformance(userId) {
    return await this.fetchData(`/user/${userId}/performance`);
  }
}
