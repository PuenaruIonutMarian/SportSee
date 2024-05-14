import APIDataAdapter from './APIDataAdapter';
import MockDataAdapter from './MockDataAdapter';
import { isUsingMockData } from '../../config/AppConfig';

class DataAdapter {
  static adaptUserData(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptUserData(data);
  }

  static adaptUserActivity(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptUserActivity(data);
  }

  static adaptAverageSessions(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptAverageSessions(data);
  }

  static adaptUserPerformance(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptUserPerformance(data);
  }

}

export default DataAdapter;