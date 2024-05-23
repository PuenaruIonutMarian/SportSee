import { BaseService } from '../BaseService/BaseService'

// Classe ApiService qui étend BaseService
export class ApiService extends BaseService {
  // Méthode pour récupérer les données de l'utilisateur
  async getUserData(userId) {
    return await this.fetchData(`/user/${userId}`)
  }

  // Méthode pour récupérer l'activité de l'utilisateur
  async getUserActivity(userId) {
    return await this.fetchData(`/user/${userId}/activity`)
  }

  // Méthode pour récupérer les sessions moyennes de l'utilisateur
  async getUserAverageSessions(userId) {
    return await this.fetchData(`/user/${userId}/average-sessions`)
  }

  // Méthode pour récupérer les performances de l'utilisateur
  async getUserPerformance(userId) {
    return await this.fetchData(`/user/${userId}/performance`)
  }
}
