import React, { useEffect, useState } from 'react';

function App() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://ktoxguard-api-production.up.railway.app/stats')
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(setStats)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <div style={{ padding: 20, color: 'red' }}>⚠️ Erreur de connexion à l'API.</div>;
  }

  if (!stats) {
    return <div style={{ padding: 20 }}>Chargement des statistiques...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>KToxGuard - Dashboard</h1>
      <p>Total messages : {stats.total_messages}</p>
      <p>Messages toxiques : {stats.toxic_count}</p>
      <p>Pourcentage de toxicité : {stats.toxic_percentage}%</p>
      <p>Types de menaces : {JSON.stringify(stats.by_threat_type)}</p>
      <p>Top mots-clés : {JSON.stringify(stats.top_keywords)}</p>
    </div>
  );
}

export default App;
