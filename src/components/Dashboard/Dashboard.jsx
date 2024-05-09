import Header from '../Header/Header';
import Results from '../Results/Results';
import Graphs from '../Graphs/Graphs';
import style from './Dashboard.module.scss';
import useHostingData from '../../utils/hooks/DataHook';
import { useParams } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import ErrorMessage from '../Error/ErrorMessage';
import Loader from '../Loader/Loader';

const Dashboard = () => {
  const { id } = useParams();
  const userId = id;
  const { userData, loading, error } = useHostingData(userId);

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
        <Graphs />
        <Results userData={userData} />
      </div>
    </main>
  );
};

export default Dashboard;

