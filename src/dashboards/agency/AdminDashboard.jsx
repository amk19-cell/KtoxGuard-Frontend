import React, { useState, useEffect } from "react";
import StatsCards from "./components/StatsCards";
import ArtistsGrid from "./components/ArtistsGrid";
import CriticalAlertsPanel from "./components/CriticalAlertsPanel";
import ToxicityChart from "./components/ToxicityChart";
import { mockArtists, mockAlerts, mockGlobalStats, mockSecurityLevel } from "../../mockData";

const AdminDashboard = () => {
  const [artists, setArtists] = useState(mockArtists);
  const [alerts, setAlerts] = useState(mockAlerts);
  const [stats, setStats] = useState(mockGlobalStats);
  const [securityLevel] = useState(mockSecurityLevel);

  const handleMarkHandled = (alertId) => {
    setAlerts(alerts.filter((a) => a.id !== alertId));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>
      
      {/* Section 1 - Cards */}
      <StatsCards stats={stats} />
      
      {/* Section 2 - Graphique global */}
      <div className="mt-8">
        <ToxicityChart data={stats.toxicityTrend} title="Évolution de la toxicité - 30 jours" />
      </div>
      
      {/* Section 3 - Grille artistes + Alertes côte à côte */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2">
          <ArtistsGrid artists={artists} role="admin" />
        </div>
        <div>
          <CriticalAlertsPanel alerts={alerts} onMarkHandled={handleMarkHandled} role="admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
