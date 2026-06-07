import React, { useEffect, useState } from 'react';

function App() {
  const [stats, setStats] = useState(null);
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch stats
    fetch('https://ktoxguard-api-production.up.railway.app/stats')
      .then(res => res.json())
      .then(setStats)
      .catch(() => setError(true));
    
    // Fetch artists
    fetch('https://ktoxguard-api-production.up.railway.app/artists')
      .then(res => res.json())
      .then(setArtists)
      .catch(console.error);
  }, []);

  if (error) {
    return <div style={{ padding: 20, color: 'red' }}>⚠️ API connection error.</div>;
  }

  if (!stats) {
    return <div style={{ padding: 20 }}>Loading statistics...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>KToxGuard - Dashboard</h1>
      
      <h2>Artists monitored</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        {artists.map(artist => (
          <div key={artist.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, width: 150, textAlign: 'center' }}>
            <img src={artist.photo} alt={artist.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
            <h3>{artist.name}</h3>
            <p>{artist.members} members</p>
          </div>
        ))}
      </div>

      <h2>Global statistics</h2>
      <p><strong>Total messages analyzed:</strong> {stats.total_messages}</p>
      <p><strong>Toxic messages detected:</strong> {stats.toxic_count}</p>
      <p><strong>Toxicity percentage:</strong> {stats.toxic_percentage}%</p>
      <p><strong>Threat types:</strong> {JSON.stringify(stats.by_threat_type)}</p>
      <p><strong>Top keywords:</strong> {JSON.stringify(stats.top_keywords)}</p>
    </div>
  );
}

export default App;
