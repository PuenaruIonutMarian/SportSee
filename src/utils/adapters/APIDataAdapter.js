class APIDataAdapter {
  static adaptUserData(data) {
    return {
      name:  data?.userInfos?.firstName ||'Loading...',
      calorieCount: data?.keyData?.calorieCount || 0,
      proteinCount: data?.keyData?.proteinCount || 0,
      carbohydrateCount: data?.keyData?.carbohydrateCount || 0,
      lipidCount: data?.keyData?.lipidCount || 0
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
    return {
      day: data?.day || 0,
      sessionLength: data?.sessionLength || 0,
    };
  }

  static adaptUserPerformance(data) {
    return {
      userId: data?.userId ||  0,
      value: data?.value ||  0,
      kind: data?.kind || 0,
    };
  }
}


export default APIDataAdapter;