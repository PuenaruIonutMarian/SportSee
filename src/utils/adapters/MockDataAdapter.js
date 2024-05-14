

class MockDataAdapter {
  static adaptUserData(data) {
    return {
      name: data?.firstName || 'Loading...',
      calorieCount:  data?.calorieCount || 0,
      proteinCount:  data?.proteinCount || 0,
      carbohydrateCount: data?.carbohydrateCount || 0,
      lipidCount: data?.lipidCount || 0
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
    return {
      userId: data?.userId ||  0,
      value: data?.value ||  0,
      kind: data?.kind || 0,
    };
  }
}

export default MockDataAdapter;