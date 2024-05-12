// class DataAdapter {
//   static adaptUserData(data) {
//     return {
//       name: data?.userInfos?.firstName || data?.firstName || 'Loading...',
//       calorieCount: data?.keyData?.calorieCount || data?.calorieCount || 0,
//       proteinCount: data?.keyData?.proteinCount || data?.proteinCount || 0,
//       carbohydrateCount: data?.keyData?.carbohydrateCount || data?.carbohydrateCount || 0,
//       lipidCount: data?.keyData?.lipidCount || data?.lipidCount || 0,
//       userActivity: data || data?.userActivity || [], 
//       averageSessions: data || data?.averageSessions || {},
//       performance: data || data?.performance || {}, 
//     };
//   }
// }

// export default DataAdapter;


class APIDataAdapter {
  static adaptUserData(data) {
    return {
      name: data?.userInfos?.firstName || data?.firstName || 'Loading...',
      calorieCount: data?.keyData?.calorieCount || data?.calorieCount || 0,
      proteinCount: data?.keyData?.proteinCount || data?.proteinCount || 0,
      carbohydrateCount: data?.keyData?.carbohydrateCount || data?.carbohydrateCount || 0,
      lipidCount: data?.keyData?.lipidCount || data?.lipidCount || 0
    };
  }

  static adaptUserActivity(data) {
    return {
      day: data?.sessions.map(session => session.day) || [],
      kilogram: data?.sessions.map(session => session.kilogram) || [],
      calories: data?.sessions.map(session => session.calories) || [],
    };
  }

  static adaptAverageSessions(data) {
    return {
      day: data?.day || data?.day || 0,
      sessionLength: data?.sessionLength || data?.sessionLength || 0,
    };
  }

  static adaptUserPerformance(data) {
    return {
      userId: data?.userId || data?.userId || 0,
      value: data?.value || data?.value || 0,
      kind: data?.kind || data?.kind || 0,
    };
  }
}

export default APIDataAdapter;
