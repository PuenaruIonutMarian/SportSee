import {
  ApiAxiosInstance,
  MockDataAxiosInstance,
} from '../AxiosInstance/AxiosInstance'
import { isUsingMockData } from '../../config/AppConfig'

/**
 * Classe de base pour les services.
 */
export class BaseService {
  /**
   * Récupère des données à partir d'une API en fonction de l'URL de l'endpoint fourni.
   * @param {string} endpoint - L'URL de l'endpoint à partir duquel récupérer les données.
   * @returns {Promise<Object>} Les données récupérées depuis l'API.
   * @throws {Error} Une erreur si la récupération des données échoue.
   */
  async fetchData(endpoint) {
    try {
      // Utilise l'instance Axios appropriée en fonction de l'utilisation de données simulées ou réelles.
      const response = await (
        isUsingMockData ? MockDataAxiosInstance : ApiAxiosInstance
      ).get(endpoint)
      return response.data
    } catch (error) {
      // En cas d'erreur, affiche un message d'erreur et lance l'erreur.
      console.error(`Error while retrieving data from ${endpoint}`, error)
      throw error
    }
  }
}
