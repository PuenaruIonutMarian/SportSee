import APIDataAdapter from './APIDataAdapter';
import MockDataAdapter from './MockDataAdapter';
import { isUsingMockData } from '../../config/AppConfig';

class DataAdapter {
  static adaptUserData(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    try {
      return adapter.adaptUserData(data);
    } catch (error) {
      console.error('Error adapting user data:', error);
      return error; 
    }
  }

  static adaptUserActivity(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    try {
      return adapter.adaptUserActivity(data);
    } catch (error) {
      console.error('Error adapting user activity data:', error);
      return error; 
    }
  }

  static adaptAverageSessions(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    try {
      return adapter.adaptAverageSessions(data);
    } catch (error) {
      console.error('Error adapting average sessions data:', error);
      return error; 
    }
  }

  static adaptUserPerformance(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    try {
      return adapter.adaptUserPerformance(data);
    } catch (error) {
      console.error('Error adapting user performance data:', error);
      return error; 
    }
  }
}

export default DataAdapter;
