import Header from '../Header/Header'
import Graphs from '../Graphs/Graphs'
import style from './Dashboard.module.scss'
import useHostingData from '../../utils/hooks/DataHook'
import { useParams } from 'react-router-dom'
import ErrorMessage from '../Error/ErrorMessage'
import Loader from '../Loader/Loader'

const Dashboard = () => {
  // Récupération de l'identifiant de l'utilisateur depuis les paramètres d'URL
  const { id } = useParams()
  const userId = id

  // Utilisation du hook personnalisé pour récupérer les données de l'utilisateur
  const {
    userData,
    userActivity,
    averageSessions,
    userPerformance,
    loading,
    error,
  } = useHostingData(userId)

  return (
    <main className={style.dashboard}>
      {/* Affichage du loader pendant le chargement des données */}
      {loading ? (
        <Loader />
      ) : error ? ( // Affichage du message d'erreur en cas d'erreur lors du chargement des données
        <ErrorMessage />
      ) : (
        // Affichage des données du tableau de bord
        <>
          {/* Affichage de l'en-tête avec les données de l'utilisateur */}
          <Header userData={userData} />
          <div className={style.graphics}>
            {/* Affichage des graphiques avec les données d'activité, de sessions moyennes et de performance */}
            <Graphs
              userActivity={userActivity}
              averageSessions={averageSessions}
              userPerformance={userPerformance}
              userData={userData}
            />
          </div>
        </>
      )}
    </main>
  )
}

export default Dashboard
