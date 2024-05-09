import { BaseService } from '../BaseService/BaseService';

export class MockService extends BaseService {
  async getUserData(userId) {
    try {
      const data = await this.fetchData('/mockData.json');
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
      const data = await this.fetchData('/mockData.json');
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
      const data = await this.fetchData('/mockData.json');
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
      const data = await this.fetchData('/mockData.json');
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


// export class MockService extends BaseService {
//   async getUserData(userId) {
//     try {
//       const data = await this.fetchData();
//       const userData = data.USER_MAIN_DATA.find(item => item.id === parseInt(userId));
//       if (userData) {
//         return { data: { userInfos: userData.userInfos, keyData: userData.keyData, score: userData.score } };
//       } else {
//         throw new Error('User data not found in mock data');
//       }
//     } catch (error) {
//       throw new Error('Error fetching user data from mock data: ' + error.message);
//     }
//   }

//   async getUserActivity(userId) {
//     try {
//       const data = await this.fetchData();
//       const userActivity = data.USER_ACTIVITY.find(data => data.userId === parseInt(userId));
//       if (userActivity) {
//         return { data: userActivity };
//       } else {
//         throw new Error('User activity data not found in mock data');
//       }
//     } catch (error) {
//       throw new Error('Error fetching user activity from mock data: ' + error.message);
//     }
//   }

//   async getUserAverageSessions(userId) {
//     try {
//       const data = await this.fetchData();
//       const averageSessions = data.USER_AVERAGE_SESSIONS.find(data => data.userId === parseInt(userId));
//       if (averageSessions) {
//         return { data: { sessions: averageSessions.sessions } };
//       } else {
//         throw new Error('User average sessions data not found in mock data');
//       }
//     } catch (error) {
//       throw new Error('Error fetching user average sessions from mock data: ' + error.message);
//     }
//   }

//   async getUserPerformance(userId) {
//     try {
//       const data = await this.fetchData();
//       const userPerformance = data.USER_PERFORMANCE.find(data => data.userId === parseInt(userId));
//       if (userPerformance) {
//         return { data: userPerformance };
//       } else {
//         throw new Error('User performance data not found in mock data');
//       }
//     } catch (error) {
//       throw new Error('Error fetching user performance from mock data: ' + error.message);
//     }
//   }
// }
