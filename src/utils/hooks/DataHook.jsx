import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../utils/context/DataContext';

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

        setUserData(userData);
        setUserActivity(userActivity);
        setAverageSessions(averageSessions);
        setUserPerformance(userPerformance);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setUserData(null);
      setUserActivity(null);
      setAverageSessions(null);
      setUserPerformance(null);
      setLoading(true);
      setError(null);
    };
  }, [dataService, userId]);

  return { userData, userActivity, averageSessions, userPerformance, loading, error };
};

export default useHostingData;
