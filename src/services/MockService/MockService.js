import { BaseService } from '../BaseService/BaseService';

export class MockService extends BaseService {
  async getUserData(userId) {
    try {
      const data = await this.fetchData();
      const userData = data[userId]?.userInfo;
      if (userData) {
        return { data: userData };
      } else {
        throw new Error('User data not found in mock data');
      }
    } catch (error) {
      throw new Error('Error fetching user data from mock data: ' + error.message);
    }
  }

  async getUserActivity(userId) {
    try {
      const data = await this.fetchData();
      const userActivity = data[userId]?.userActivity;
      if (userActivity) {
        return { data: userActivity };
      } else {
        throw new Error('User activity data not found in mock data');
      }
    } catch (error) {
      throw new Error('Error fetching user activity from mock data: ' + error.message);
    }
  }

  async getUserAverageSessions(userId) {
    try {
      const data = await this.fetchData();
      const averageSessions = data[userId]?.averageSessions;
      if (averageSessions) {
        return { data: averageSessions };
      } else {
        throw new Error('User average sessions data not found in mock data');
      }
    } catch (error) {
      throw new Error('Error fetching user average sessions from mock data: ' + error.message);
    }
  }

  async getUserPerformance(userId) {
    try {
      const data = await this.fetchData();
      const performance = data[userId]?.performance;
      if (performance) {
        return { data: performance };
      } else {
        throw new Error('User performance data not found in mock data');
      }
    } catch (error) {
      throw new Error('Error fetching user performance from mock data: ' + error.message);
    }
  }
}