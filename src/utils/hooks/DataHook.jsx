import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../utils/context/DataContext'; // Update the path as per your file structure

const useHostingData = (userId) => {
  const { dataService } = useContext(DataContext);
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await dataService.getUserData(userId);
        const userActivity = await dataService.getUserActivity(userId);
        const averageSessions = await dataService.getUserAverageSessions(userId);
        const userPerformance = await dataService.getUserPerformance(userId);
        console.log('userData:', userData);
        console.log('userActivity:', userActivity);
        console.log('averageSessions:', averageSessions);
        console.log('userPerformance:', userPerformance);

        setUserData(userData);
        setUserActivity(userActivity);
        setAverageSessions(averageSessions);
        setUserPerformance(userPerformance);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Clean-up function if needed
    return () => {
      // Clean-up code if any
    };
  }, [dataService, userId]);

  return { userData, userActivity, averageSessions, userPerformance, loading, error };
};

export default useHostingData;
