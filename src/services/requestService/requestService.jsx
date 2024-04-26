import AxiosInstance from './AxiosInstance';
import mockData from '/src/services/mockData.json';

const useMockData = true; // Set to true if you want to use mock data

class DataService {
  constructor() {
    this.service = useMockData ? new MockDataService() : new ApiDataService();
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
      const response = await AxiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Error while retrieving data from ${endpoint}`, error);
      throw error;
    }
  }
}

class ApiDataService extends BaseDataService {
  async getUserData(userId) {
    return await this.fetchData(`/api/user/${userId}`);
  }

  async getUserActivity(userId) {
    return await this.fetchData(`/api/user/${userId}/activity`);
  }

  async getUserAverageSessions(userId) {
    return await this.fetchData(`/api/user/${userId}/average-sessions`);
  }

  async getUserPerformance(userId) {
    return await this.fetchData(`/api/user/${userId}/performance`);
  }
}

class MockDataService {
  async getUserData(userId) {
    if (mockData[userId]) {
      return mockData[userId].userInfo;
    } else {
      throw new Error('User data not found in mock data');
    }
  }

  async getUserActivity(userId) {
    if (mockData[userId] && mockData[userId].userActivity) {
      return { data: mockData[userId].userActivity };
    } else {
      throw new Error('User activity data not found in mock data');
    }
  }

  async getUserAverageSessions(userId) {
    if (mockData[userId] && mockData[userId].averageSessions && mockData[userId].averageSessions.sessions) {
      return { data: { sessions: mockData[userId].averageSessions.sessions } };
    } else {
      throw new Error('User average sessions data not found in mock data');
    }
  }

  async getUserPerformance(userId) {
    if (mockData[userId] && mockData[userId].performance) {
      return { data: mockData[userId].performance };
    } else {
      throw new Error('User performance data not found in mock data');
    }
  }
}

export { DataService };
