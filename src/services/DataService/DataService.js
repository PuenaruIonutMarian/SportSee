import { ApiService } from '../ApiService/ApiService'
import { MockService } from '../MockService/MockService'
import { isUsingMockData } from '../../config/AppConfig'

/**
 * Classe de service pour gérer les données utilisateur.
 */
class DataService {
  constructor() {
    // Initialise le service en fonction de l'utilisation des données simulées ou réelles.
    this.service = isUsingMockData ? new MockService() : new ApiService()
  }

  /**
   * Récupère les données utilisateur pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données utilisateur.
   */
  async getUserData(userId) {
    return await this.service.getUserData(userId)
  }

  /**
   * Récupère les données d'activité utilisateur pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données d'activité utilisateur.
   */
  async getUserActivity(userId) {
    return await this.service.getUserActivity(userId)
  }

  /**
   * Récupère les données de sessions moyennes pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données de sessions moyennes.
   */
  async getUserAverageSessions(userId) {
    return await this.service.getUserAverageSessions(userId)
  }

  /**
   * Récupère les données de performance utilisateur pour un utilisateur spécifié.
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Object>} Les données de performance utilisateur.
   */
  async getUserPerformance(userId) {
    return await this.service.getUserPerformance(userId)
  }
}

export { DataService }
