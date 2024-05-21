import PropTypes from 'prop-types';
import styles from './Graphs.module.scss';
import Activite from './Activite/Activite';
import Duree from './Duree/Duree';
import Intensite from './Intensite/Intensite';
import Score from './Score/Score';
import Result from './Result/Result';

const Graphs = ({  userActivity,averageSessions, userPerformance, userData }) => {
  return (
    <div className={styles.container}> 
      <div className={styles.graphs}>
        <Activite userActivity={userActivity} />
        <Duree averageSessions={averageSessions} />
        <Intensite userPerformance={userPerformance} />
        <Score userData={userData} />
      </div>
      <div className={styles.results}>
        <Result data={userData} category='calories' />
        <Result data={userData} category='proteines' />
        <Result data={userData} category='glucides' />
        <Result data={userData} category='lipides' />
      </div>

    </div>
  );
};

Graphs.propTypes = {
  userActivity: PropTypes.object.isRequired,
  averageSessions: PropTypes.object.isRequired,
  userPerformance: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
};

export default Graphs;
