import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './DataContext'; // Import DataContext from DataContext.jsx
import { DataService } from './services/requestService/requestService'; // Import DataService

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const dataService = new DataService();

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchData = async () => {
      try {
        const userData = await dataService.getUserData();
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
