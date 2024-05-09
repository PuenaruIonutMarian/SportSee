class DataAdapter {
  static adaptUserData(data) {
    return {
      name: data?.userInfos?.firstName || data?.firstName || 'Loading...',
      calorieCount: data?.keyData?.calorieCount || data?.calorieCount || 0,
      proteinCount: data?.keyData?.proteinCount || data?.proteinCount || 0,
      carbohydrateCount: data?.keyData?.carbohydrateCount || data?.carbohydrateCount || 0,
      lipidCount: data?.keyData?.lipidCount || data?.lipidCount || 0,
    };
  }
}

export default DataAdapter;