import { createContext } from 'react';
import { DataService } from '../../services/DataService/DataService';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const dataService = new DataService();
  return <DataContext.Provider value={{ dataService }}>{children}</DataContext.Provider>;
}


