import Header from '../../components/Header/Header';
import Results from '../../components/Results/Results';
import Graphs from '../../components/Graphs/Graphs';
import style from './Dashboard.module.scss';
import useHostingData from '../../utils/hooks/DataHook';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import ErrorMessage from '../../components/Error/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const Dashboard = () => {
  const { id } = useParams();
  const userId = id;
  const { userData, userActivity, averageSessions, userPerformance, loading, error } = useHostingData(userId);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (!userData) {
    return <ErrorMessage />;
  }

  return (
    <main className={style.dashboard}>
      <Header userData={userData} />
      <div className={style.graphics}>
        <Graphs userActivity={userActivity} averageSessions={averageSessions} userPerformance={userPerformance} />
        <Results userData={userData} />
      </div>
    </main>
  );
};

export default Dashboard;

