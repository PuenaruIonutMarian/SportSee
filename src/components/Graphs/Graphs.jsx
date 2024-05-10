import styles from './Graphs.module.scss';
import Activite from './Activite/Activite';
import Duree from './Duree/Duree';
import Intensite from './Intensite/Intensite';
import Score from './Score/Score';


const Graphs = ({userActivity}) => {
// pentru celelalte grafice de introdus si averageSessions, userPerformance

  return (
    <div className={styles.graphs}>
      <Activite userActivity={userActivity}/>
      <Duree />
      <Intensite />
      <Score />
    </div>
  );
}

export default Graphs;
