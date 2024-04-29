import Header from '../Header/Header';
import Results from '../Results/Results';
import Graphs from '../Graphs/Graphs';
import style from './Dashboard.module.scss';
import useHostingData from '../../utils/hooks/DataHook';
import { useParams } from 'react-router-dom'; 
import Error from '../../pages/Error/Error';
import ErrorMessage from '../Error/ErrorMessage';
import Loader from '../Loader/Loader'

const Dashboard = () => {
  const { id } = useParams();
  const userId = id; 


  const { userData, userActivity, averageSessions, userPerformance , loading, error} = useHostingData(userId);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (!userData || !userActivity || !averageSessions || !userPerformance) {
    return <ErrorMessage />;
  }

  return (
    <main className={style.dashboard}>

      <Header name={userData?.data?.userInfos?.firstName || 'Loading...'} />

      <div className={style.graphics}>
        <Graphs />

        <Results 
          calorieCount={userData?.data?.keyData?.calorieCount || 0} 
          proteinCount={userData?.data?.keyData?.proteinCount || 0} 
          carbohydrateCount={userData?.data?.keyData?.carbohydrateCount || 0} 
          lipidCount={userData?.data?.keyData?.lipidCount || 0}
        />
      </div>
    </main>
  );
};

export default Dashboard;



