import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboard from './dashboards/agency/AdminDashboard';
import ArtistDetailView from './dashboards/agency/ArtistDetailView';

function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch('https://ktoxguard-api-production.up.railway.app/artists')
      .then(res => res.json())
      .then(setArtists)
      .catch(err => console.error(err));
  }, []);
  return (
    <Layout artists={artists}>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/artist/:id" element={<ArtistDetailView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
