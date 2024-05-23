import APIDataAdapter from './APIDataAdapter'
import MockDataAdapter from './MockDataAdapter'
import { isUsingMockData } from '../../config/AppConfig'

/**
 * Classe utilitaire pour adapter les données en fonction du mode d'utilisation des données.
 */
class DataAdapter {
  /**
   * Adapte les données utilisateur en fonction du mode d'utilisation des données.
   * @param {Object} data - Les données utilisateur à adapter.
   * @returns {Object} Les données utilisateur adaptées.
   */
  static adaptUserData(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter
    try {
      return adapter.adaptUserData(data)
    } catch (error) {
      console.error('Error adapting user data:', error)
      return error
    }
  }

  /**
   * Adapte les données d'activité utilisateur en fonction du mode d'utilisation des données.
   * @param {Object} data - Les données d'activité utilisateur à adapter.
   * @returns {Object[]} Les données d'activité utilisateur adaptées.
   */
  static adaptUserActivity(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter
    try {
      return adapter.adaptUserActivity(data)
    } catch (error) {
      console.error('Error adapting user activity data:', error)
      return error
    }
  }

  /**
   * Adapte les données de sessions moyennes en fonction du mode d'utilisation des données.
   * @param {Object} data - Les données de sessions moyennes à adapter.
   * @returns {Object[]} Les données de sessions moyennes adaptées.
   */
  static adaptAverageSessions(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter
    try {
      return adapter.adaptAverageSessions(data)
    } catch (error) {
      console.error('Error adapting average sessions data:', error)
      return error
    }
  }

  /**
   * Adapte les données de performances utilisateur en fonction du mode d'utilisation des données.
   * @param {Object} data - Les données de performances utilisateur à adapter.
   * @returns {Object[]} Les données de performances utilisateur adaptées.
   */
  static adaptUserPerformance(data) {
    const adapter = isUsingMockData ? MockDataAdapter : APIDataAdapter
    try {
      return adapter.adaptUserPerformance(data)
    } catch (error) {
      console.error('Error adapting user performance data:', error)
      return error
    }
  }
}

export default DataAdapter
