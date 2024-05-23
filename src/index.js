/**
 * Point d'entrée de l'application React.
 * Rend le composant principal de l'application et configure le routage.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.scss'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Sidebar from './components/Sidebar/Sidebar'
import { DataProvider } from './utils/context/DataContext'

// Obtient l'élément racine où l'application sera rendue
const root = ReactDOM.createRoot(document.getElementById('root'))

// Rend le composant principal de l'application
root.render(
  <React.StrictMode>
    {/* Configuration du React Router */}
    <Router>
      {/* Fournit le contexte de données aux composants enfants */}
      <DataProvider>
        {/* Rend le composant Navbar */}
        <Navbar />
        <div style={{ display: 'flex' }}>
          {/* Rend le composant Sidebar */}
          <Sidebar />
          {/* Définit les routes */}
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<Home />} />
            {/* Route pour la page du tableau de bord */}
            <Route path="dashboard/user/:id" element={<Dashboard />} />
            {/* Route pour gérer les chemins inconnus */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  </React.StrictMode>,
)
