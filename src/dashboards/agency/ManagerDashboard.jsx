import React from 'react'
import StatsCards from './components/StatsCards'
import ArtistsGrid from './components/ArtistsGrid'
import CriticalAlertsPanel from './components/CriticalAlertsPanel'
import ToxicityChart from './components/ToxicityChart'
import { mockArtists, mockAlerts, mockGlobalStats } from '../../mockData'

const ManagerDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Manager</h2>
      <StatsCards stats={mockGlobalStats} />
      <div className="mt-8">
        <ToxicityChart data={mockGlobalStats.toxicityTrend} title="Évolution de la toxicité" />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2">
          <ArtistsGrid artists={mockArtists} role="manager" />
        </div>
        <div>
          <CriticalAlertsPanel alerts={mockAlerts} onMarkHandled={() => {}} role="manager" />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard
