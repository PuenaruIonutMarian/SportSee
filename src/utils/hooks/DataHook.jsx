import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../utils/context/DataContext'

/**
 * Hook personnalisé pour récupérer les données d'hébergement d'un utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur.
 * @returns {Object} Un objet contenant les données d'utilisateur, d'activité, de sessions moyennes,
 * de performance utilisateur, l'état de chargement et l'éventuelle erreur.
 */
const useHostingData = (userId) => {
  const { dataService } = useContext(DataContext)
  const [userData, setUserData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    /**
     * Fonction asynchrone pour récupérer les données d'utilisateur, d'activité,
     * de sessions moyennes et de performance utilisateur.
     */
    const fetchData = async () => {
      try {
        const userData = await dataService.getUserData(userId)
        const userActivity = await dataService.getUserActivity(userId)
        const averageSessions = await dataService.getUserAverageSessions(userId)
        const userPerformance = await dataService.getUserPerformance(userId)

        // Met à jour les états avec les données récupérées
        setUserData(userData)
        setUserActivity(userActivity)
        setAverageSessions(averageSessions)
        setUserPerformance(userPerformance)
        setLoading(false)
      } catch (error) {
        // Gère les erreurs de récupération des données
        console.error('Erreur lors de la récupération des données :', error)
        setError(error)
        setLoading(false)
      }
    }

    // Appelle la fonction de récupération des données
    fetchData()

    // Nettoyage des états lors du démontage du composant
    return () => {
      setUserData(null)
      setUserActivity(null)
      setAverageSessions(null)
      setUserPerformance(null)
      setLoading(true)
      setError(null)
    }
  }, [dataService, userId])

  // Retourne les données d'utilisateur, d'activité, de sessions moyennes,
  // de performance utilisateur, l'état de chargement et l'éventuelle erreur
  return {
    userData,
    userActivity,
    averageSessions,
    userPerformance,
    loading,
    error,
  }
}

export default useHostingData
