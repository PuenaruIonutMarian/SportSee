/**
 * Classe utilitaire pour adapter les données du mock.
 */
class MockDataAdapter {
  /**
   * Adapte les données utilisateur pour afficher les informations de l'utilisateur.
   * @param {Object} data - Les données de l'utilisateur.
   * @returns {Object} Les données adaptées de l'utilisateur.
   */
  static adaptUserData(data) {
    return {
      name: data?.firstName || 'Chargement...',
      calorieCount: data?.calorieCount || 0,
      proteinCount: data?.proteinCount || 0,
      carbohydrateCount: data?.carbohydrateCount || 0,
      lipidCount: data?.lipidCount || 0,
      score: data?.todayScore || 0,
    }
  }

  /**
   * Adapte les données d'activité utilisateur pour afficher les sessions d'activité.
   * @param {Object[]} data - Les données d'activité utilisateur.
   * @returns {Object[]} Les données adaptées d'activité utilisateur.
   */
  static adaptUserActivity(data) {
    return data.sessions.map((session) => ({
      day: session.day.split('-')[2].replace(/^0+/, ''),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }

  /**
   * Adapte les données de sessions moyennes pour afficher la durée moyenne des sessions.
   * @param {Object[]} data - Les données de sessions moyennes.
   * @returns {Object[]} Les données adaptées de sessions moyennes.
   */
  static adaptAverageSessions(data) {
    const frenchDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return data.sessions.map((session) => ({
      day: frenchDays[session.day - 1],
      sessionLength: session.sessionLength,
    }))
  }

  /**
   * Adapte les données de performances utilisateur pour afficher les performances.
   * @param {Object} data - Les données de performances utilisateur.
   * @returns {Object[]} Les données adaptées de performances utilisateur.
   */
  static adaptUserPerformance(data) {
    const adaptedData = []
    const categoryTranslations = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }

    const orderedCategories = [
      'intensity',
      'speed',
      'strength',
      'endurance',
      'energy',
      'cardio',
    ]

    orderedCategories.forEach((category) => {
      const translatedCategory = categoryTranslations[category]
      // Recherche les données correspondantes dans data.data en fonction du type d'activité trouvé dans data.kind[item.kind].
      const matchingData = data.data.find(
        (item) => data.kind[item.kind] === category,
      )
      const value = matchingData ? matchingData.value : 0
      adaptedData.push({ kind: translatedCategory, value: value })
    })

    return adaptedData
  }
}

export default MockDataAdapter
