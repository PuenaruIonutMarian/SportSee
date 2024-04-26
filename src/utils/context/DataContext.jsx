import { createContext, useContext, useState, useEffect } from 'react';
import { DataService } from './services/requestService/requestService'; // Adjust the import path as needed

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const dataService = new DataService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await dataService.getUserData(); // Fetch user data using DataService
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Perform any cleanup if needed
    };
  }, [dataService]);

  return (
    <DataContext.Provider value={{ userData }}>
      {children}
    </DataContext.Provider>
  );
};

