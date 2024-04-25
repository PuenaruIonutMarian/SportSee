import React from 'react'
import Header from '../../components/Header/Header'
import Results from '../../components/Results/Results'

const Home = () => {
  return (
    <main className="home">
    <Header name="John"/>
    <Results calorieCount={10} proteinCount={0.0} carbohydrateCount={0.5} />

    </main>
  )
}

export default Home