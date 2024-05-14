import APIDataAdapter from './APIDataAdapter';
import MockDataAdapter from './MockDataAdapter';
import { isUsingMockData } from '../../services/DataService/DataService';

class DataAdapter {
  static adaptUserData(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptUserData(data);
  }

  static adaptUserActivity(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter;
    return adapter.adaptUserActivity(data);
  }
}

export default DataAdapter;