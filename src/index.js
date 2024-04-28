import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.scss';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Sidebar from './components/Sidebar/Sidebar';
import { DataProvider } from './utils/context/DataContext';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="dashboard/user/:id" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  </React.StrictMode>,
)

