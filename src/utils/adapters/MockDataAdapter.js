class MockDataAdapter {
  static adaptUserData(data) {
    return {
      name: data?.firstName || 'Loading...',
      calorieCount:  data?.calorieCount || 0,
      proteinCount:  data?.proteinCount || 0,
      carbohydrateCount: data?.carbohydrateCount || 0,
      lipidCount: data?.lipidCount || 0,
      score: data?.todayScore || 0
    };
  }

    static adaptUserActivity(data) {
    return data.sessions.map(session => ({
      day: session.day.split('-')[2].replace(/^0+/, ''),
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  static adaptAverageSessions(data) {
    const frenchDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return data.sessions.map(session => ({
      day: frenchDays[session.day - 1],
      sessionLength: session.sessionLength
    }))
  }


  static adaptUserPerformance(data) {
      const adaptedData = [];
      const categoryTranslations = {
        cardio: "Cardio",
        energy: "Énergie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité"
      };

      const orderedCategories = ["intensity", "speed", "strength", "endurance", "energy", "cardio"];

      orderedCategories.forEach(category => {
        const translatedCategory = categoryTranslations[category];
        // Cherche les données correspondantes dans data.data en fonction du type d'activité trouvé dans data.kind[item.kind].
        const matchingData = data.data.find(item => data.kind[item.kind] === category);
        const value = matchingData ? matchingData.value : 0;
        adaptedData.push({ kind: translatedCategory, value: value });
      });

      return adaptedData;
    }



}

export default MockDataAdapter;