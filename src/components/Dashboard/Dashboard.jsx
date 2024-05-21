import Header from '../Header/Header';
import Graphs from '../Graphs/Graphs';
import style from './Dashboard.module.scss';
import useHostingData from '../../utils/hooks/DataHook';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../Error/ErrorMessage';
import Loader from '../Loader/Loader';

const Dashboard = () => {
  const { id } = useParams();
  const userId = id;
  const { userData, userActivity, averageSessions, userPerformance, loading, error } = useHostingData(userId);


  return (

    <main className={style.dashboard}>
    {loading ?(
      <Loader />
    ) : error ? (
      <ErrorMessage />
    ) : (<>
      <Header userData={userData} />
      <div className={style.graphics}>
        <Graphs userActivity={userActivity} averageSessions={averageSessions} userPerformance={userPerformance} userData={userData}/>
      </div>
</>
      )}
    </main>

  );
};

export default Dashboard;
