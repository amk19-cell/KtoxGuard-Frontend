import React, { useEffect, useState } from 'react';

function App() {
  const [stats, setStats] = useState(null);
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://ktoxguard-api-production.up.railway.app/stats')
      .then(res => res.json())
      .then(setStats)
      .catch(() => setError(true));
    
    fetch('https://ktoxguard-api-production.up.railway.app/artists')
      .then(res => res.json())
      .then(setArtists)
      .catch(console.error);
  }, []);

  if (error) return <div>⚠️ API connection error. Check if backend is running.</div>;
  if (!stats) return <div>Loading statistics...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>KToxGuard Dashboard</h1>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
        {artists.map(artist => (
          <div key={artist.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, width: 150, textAlign: 'center' }}>
            <img src={artist.photo} alt={artist.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
            <h3>{artist.name}</h3>
            <p>{artist.members} members</p>
          </div>
        ))}
      </div>
      <h2>Global Statistics</h2>
      <p>Total messages: {stats.total_messages}</p>
      <p>Toxic messages: {stats.toxic_count}</p>
      <p>Toxicity percentage: {stats.toxic_percentage}%</p>
    </div>
  );
}

export default App;
