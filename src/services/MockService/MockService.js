import { BaseService } from '../BaseService/BaseService'

/**
 * Classe de service pour fournir des données simulées.
 */
export class MockService extends BaseService {
  /**
   * Récupère les données utilisateur simulées pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données utilisateur simulées.
   * @throws {Error} Une erreur si les données utilisateur ne sont pas trouvées dans les données simulées.
   */
  async getUserData(userId) {
    try {
      const data = await this.fetchData()
      const userData = data[userId]?.userInfo
      if (userData) {
        return { data: userData }
      } else {
        throw new Error(
          'Données utilisateur non trouvées dans les données simulées',
        )
      }
    } catch (error) {
      throw new Error(
        'Erreur lors de la récupération des données utilisateur depuis les données simulées : ' +
          error.message,
      )
    }
  }

  /**
   * Récupère les données d'activité utilisateur simulées pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données d'activité utilisateur simulées.
   * @throws {Error} Une erreur si les données d'activité utilisateur ne sont pas trouvées dans les données simulées.
   */
  async getUserActivity(userId) {
    try {
      const data = await this.fetchData()
      const userActivity = data[userId]?.userActivity
      if (userActivity) {
        return { data: userActivity }
      } else {
        throw new Error(
          "Données d'activité utilisateur non trouvées dans les données simulées",
        )
      }
    } catch (error) {
      throw new Error(
        "Erreur lors de la récupération des données d'activité utilisateur depuis les données simulées : " +
          error.message,
      )
    }
  }

  /**
   * Récupère les données de sessions moyennes simulées pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données de sessions moyennes simulées.
   * @throws {Error} Une erreur si les données de sessions moyennes ne sont pas trouvées dans les données simulées.
   */
  async getUserAverageSessions(userId) {
    try {
      const data = await this.fetchData()
      const averageSessions = data[userId]?.averageSessions
      if (averageSessions) {
        return { data: averageSessions }
      } else {
        throw new Error(
          'Données de sessions moyennes utilisateur non trouvées dans les données simulées',
        )
      }
    } catch (error) {
      throw new Error(
        'Erreur lors de la récupération des données de sessions moyennes depuis les données simulées : ' +
          error.message,
      )
    }
  }

  /**
   * Récupère les données de performance utilisateur simulées pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données de performance utilisateur simulées.
   * @throws {Error} Une erreur si les données de performance utilisateur ne sont pas trouvées dans les données simulées.
   */
  async getUserPerformance(userId) {
    try {
      const data = await this.fetchData()
      const performance = data[userId]?.performance
      if (performance) {
        return { data: performance }
      } else {
        throw new Error(
          'Données de performance utilisateur non trouvées dans les données simulées',
        )
      }
    } catch (error) {
      throw new Error(
        'Erreur lors de la récupération des données de performance depuis les données simulées : ' +
          error.message,
      )
    }
  }
}
