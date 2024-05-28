import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../utils/context/DataContext'

/**

Hook personnalisé pour récupérer les données d'hébergement pour un utilisateur.
@param {string} userId - L'ID de l'utilisateur.
@returns {Object} Un objet contenant les données utilisateur, l'activité, les sessions moyennes,
les données de performance, l'état de chargement et les erreurs individuelles.
*/
const useHostingData = (userId) => {
  const { dataService } = useContext(DataContext)
  const [userData, setUserData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({
    userData: null,
    userActivity: null,
    averageSessions: null,
    userPerformance: null,
  })

  useEffect(() => {
    /**
     * Fonction pour récupérer les données utilisateur.
     */
    const fetchUserData = async () => {
      try {
        const data = await dataService.getUserData(userId)
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setErrors((prev) => ({ ...prev, userData: error }))
      }
    }

    /**
     * Fonction pour récupérer l'activité utilisateur.
     */
    const fetchUserActivity = async () => {
      try {
        const data = await dataService.getUserActivity(userId)
        setUserActivity(data)
      } catch (error) {
        console.error('Error fetching user activity:', error)
        setErrors((prev) => ({ ...prev, userActivity: error }))
      }
    }

    /**
     * Fonction pour récupérer les sessions moyennes utilisateur.
     */
    const fetchAverageSessions = async () => {
      try {
        const data = await dataService.getUserAverageSessions(userId)
        setAverageSessions(data)
      } catch (error) {
        console.error('Error fetching average sessions:', error)
        setErrors((prev) => ({ ...prev, averageSessions: error }))
      }
    }

    /**
     * Fonction pour récupérer les performances utilisateur.
     */
    const fetchUserPerformance = async () => {
      try {
        const data = await dataService.getUserPerformance(userId)
        setUserPerformance(data)
      } catch (error) {
        console.error('Error fetching user performance:', error)
        setErrors((prev) => ({ ...prev, userPerformance: error }))
      }
    }

    /**
     * Fonction pour récupérer toutes les données utilisateur.
     */
    const fetchData = async () => {
      setLoading(true)
      await Promise.all([
        fetchUserData(),
        fetchUserActivity(),
        fetchAverageSessions(),
        fetchUserPerformance(),
      ])
      setLoading(false)
    }

    fetchData()

    return () => {
      setUserData(null)
      setUserActivity(null)
      setAverageSessions(null)
      setUserPerformance(null)
      setLoading(true)
      setErrors({
        userData: null,
        userActivity: null,
        averageSessions: null,
        userPerformance: null,
      })
    }
  }, [dataService, userId])

  return {
    userData,
    userActivity,
    averageSessions,
    userPerformance,
    loading,
    errors,
  }
}

export default useHostingData
