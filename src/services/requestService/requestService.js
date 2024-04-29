import {ApiAxiosInstance} from  '../AxiosInstance/AxiosInstance';
import { MockDataAxiosInstance } from '../AxiosInstance/AxiosInstance';

const isUsingMockData = false; // TRUE for mock data and FALSE for API

class DataService {
  constructor() {
    this.service = isUsingMockData ? new MockDataService() : new ApiDataService();
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

class BaseDataService {
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


class ApiDataService extends BaseDataService {
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

class MockDataService extends BaseDataService {
  async getUserData(userId) {
    try {
      const data = await this.fetchData();
      const userData = data.USER_MAIN_DATA.find(item => item.id === parseInt(userId));
      if (userData) {
        return { data: { userInfos: userData.userInfos, keyData: userData.keyData, score: userData.score } };
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
      const userActivity = data.USER_ACTIVITY.find(data => data.userId === parseInt(userId));
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
      const averageSessions = data.USER_AVERAGE_SESSIONS.find(data => data.userId === parseInt(userId));
      if (averageSessions) {
        return { data: { sessions: averageSessions.sessions } };
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
      const userPerformance = data.USER_PERFORMANCE.find(data => data.userId === parseInt(userId));
      if (userPerformance) {
        return { data: userPerformance };
      } else {
        throw new Error('User performance data not found in mock data');
      }
    } catch (error) {
      throw new Error('Error fetching user performance from mock data: ' + error.message);
    }
  }
}


export {DataService};