import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Nous allons créer ce fichier pour le style global

function App() {
  const [stats, setStats] = useState(null);
  const [artists, setArtists] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('https://ktoxguard-api-production.up.railway.app/stats')
      .then(res => res.json())
      .then(setStats)
      .catch(console.error);
    fetch('https://ktoxguard-api-production.up.railway.app/artists')
      .then(res => res.json())
      .then(setArtists)
      .catch(console.error);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Header avec bouton hamburger */}
        <header className="header">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <h1>KToxGuard</h1>
          <div className="lang-selector">
            <button>EN</button>
            <button>KO</button>
            <button>FR</button>
          </div>
        </header>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
          <nav>
            <Link to="/" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
            <Link to="/artists" onClick={() => setSidebarOpen(false)}>Artists</Link>
            <Link to="/alerts" onClick={() => setSidebarOpen(false)}>Alerts</Link>
          </nav>
        </div>

        {/* Overlay pour fermer sidebar sur mobile */}
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Contenu principal */}
        <main className="main">
          <Routes>
            <Route path="/" element={
              <Dashboard stats={stats} artists={artists} />
            } />
            <Route path="/artists" element={<ArtistsList artists={artists} />} />
            <Route path="/alerts" element={<AlertsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Dashboard({ stats, artists }) {
  if (!stats) return <div className="loading">Loading statistics...</div>;

  return (
    <div className="dashboard">
      <h2>Global Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Messages</h3>
          <p>{stats.total_messages}</p>
        </div>
        <div className="stat-card">
          <h3>Toxic Messages</h3>
          <p>{stats.toxic_count}</p>
        </div>
        <div className="stat-card">
          <h3>Toxicity %</h3>
          <p>{stats.toxic_percentage}%</p>
        </div>
      </div>

      <h2>Artists Monitored</h2>
      <div className="artists-grid">
        {artists.map(artist => (
          <div key={artist.id} className="artist-card">
            <img src={artist.photo} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.members} members</p>
            <div className="threat-level">🟢 Calm</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtistsList({ artists }) {
  return (
    <div className="artists-list">
      <h2>All Artists</h2>
      {artists.map(artist => (
        <div key={artist.id} className="artist-item">
          <img src={artist.photo} alt={artist.name} />
          <div>
            <h3>{artist.name}</h3>
            <p>{artist.members} members</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AlertsList() {
  return (
    <div className="alerts-list">
      <h2>Critical Alerts</h2>
      <p>No critical alerts at the moment.</p>
    </div>
  );
}

export default App;
