import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import AdminDashboard from './dashboards/agency/AdminDashboard'
// Les autres dashboards seront ajoutés plus tard

// Simulation d'authentification (à remplacer par votre vraie logique)
const mockAuth = {
  role: 'agency',
  sub_role: 'admin', // admin, manager, artist
}

function App() {
  // Redirection selon le rôle
  const getDashboard = () => {
    if (mockAuth.role !== 'agency') return <Navigate to="/login" />
    switch (mockAuth.sub_role) {
      case 'admin': return <AdminDashboard />
      case 'manager': return <div>ManagerDashboard (à venir)</div>
      case 'artist': return <div>ArtistDashboard (à venir)</div>
      default: return <Navigate to="/login" />
    }
  }

  return (
    <Layout userRole={mockAuth.sub_role}>
      <Routes>
        <Route path="/" element={getDashboard()} />
        <Route path="/dashboard/agency" element={getDashboard()} />
        <Route path="/dashboard/agency/artist/:id" element={<div>Détail artiste (à venir)</div>} />
      </Routes>
    </Layout>
  )
}

export default App
