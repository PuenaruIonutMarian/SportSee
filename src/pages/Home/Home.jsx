import React from 'react'
import Header from '../../components/Header/Header'
import Results from '../../components/Results/Results'
import Graphs from '../../components/Graphs/Graphs'
import style from './Home.module.scss'

const Home = () => {
  return (
    <main className={style.home}>
    <Header name="John"/>
      <div className={style.graphics}>
        <Graphs />
        <Results calorieCount={10} proteinCount={0.1} carbohydrateCount={0.5}  lipidCount={0.1}/>
      </div>
    </main>
  )
}

export default Home
