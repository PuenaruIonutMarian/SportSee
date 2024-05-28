import PropTypes from 'prop-types'
import styles from './Graphs.module.scss'
import Activite from './Activite/Activite'
import Duree from './Duree/Duree'
import Intensite from './Intensite/Intensite'
import Score from './Score/Score'
import Result from './Result/Result'

/**
 * Component to render different types of graphs and results.
 * @module Graphs
 * @param {Object} props - Component props.
 * @param {Object} props.userActivity - User activity data.
 * @param {Object} props.averageSessions - Average sessions data.
 * @param {Object} props.userPerformance - User performance data.
 * @param {Object} props.userData - User data.
 * @param {boolean} props.error - Error object.
 * @returns {JSX.Element} The Graphs component.
 */
const Graphs = ({
  userActivity,
  averageSessions,
  userPerformance,
  userData,
  error,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.graphs}>
        <Activite userActivity={userActivity} error={error} />
        <Duree averageSessions={averageSessions} error={error} />
        <Intensite userPerformance={userPerformance} error={error} />
        <Score userData={userData} error={error} />
      </div>
      <div className={styles.results}>
        <Result data={userData} category="calories" error={error} />
        <Result data={userData} category="proteines" error={error} />
        <Result data={userData} category="glucides" error={error} />
        <Result data={userData} category="lipides" error={error} />
      </div>
    </div>
  )
}

Graphs.propTypes = {
  userActivity: PropTypes.object.isRequired,
  averageSessions: PropTypes.object.isRequired,
  userPerformance: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  error: PropTypes.object,
}

export default Graphs
