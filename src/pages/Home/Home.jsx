import React from 'react';
import Header from '../../components/Header/Header';
import Results from '../../components/Results/Results';
import Graphs from '../../components/Graphs/Graphs';
import style from './Home.module.scss';
import useHostingData from '../../utils/hooks/DataHook';

const Home = () => {

  // TEMPORARY FOR TESTS ONLY USERID
  const userId = '12'; 

  // Call the useHostingData hook to fetch data
  const { userData, userPerformance } = useHostingData(userId);

  return (
    <main className={style.home}>
      {/* Render Header with user's first name */}
      <Header name={userData?.data?.userInfos?.firstName || 'Loading...'} />

      <div className={style.graphics}>
        <Graphs />
        {/* Pass fetched data to Results component */}
        <Results 
          calorieCount={userData?.data?.keyData?.calorieCount || 0} 
          proteinCount={userData?.data?.keyData?.proteinCount || 0} 
          carbohydrateCount={userData?.data?.keyData?.carbohydrateCount || 0} 
          lipidCount={userData?.data?.keyData?.lipidCount || 0}
        />
      </div>
    </main>
  );
};

export default Home;



