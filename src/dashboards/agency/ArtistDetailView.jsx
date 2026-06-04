import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages } from '../../api/ktoxguard';
import RecommendationsPanel from '../../components/RecommendationsPanel';

const ArtistDetailView = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`https://ktoxguard-api-production.up.railway.app/artists`)
      .then(res => res.json())
      .then(artists => {
        const found = artists.find(a => a.id === parseInt(id));
        setArtist(found);
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    if (!artist) return;
    getMessages(200).then(all => {
      const lowerName = artist.name.toLowerCase();
      const keywords = artist.keywords || [];
      const filtered = all.filter(m => m.text && (
        m.text.toLowerCase().includes(lowerName) ||
        keywords.some(k => m.text.toLowerCase().includes(k))
      ));
      setMessages(filtered);
    });
  }, [artist]);

  if (!artist) return <div>Chargement de l'artiste...</div>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img src={artist.photo} alt={artist.name} className="w-20 h-20 rounded-full object-cover" />
        <div><h2 className="text-2xl font-bold">{artist.name}</h2><p>{artist.members} membres</p></div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Messages récents mentionnant {artist.name}</h3>
      {messages.length === 0 && <p>Aucun message toxique pour l'instant.</p>}
      <div className="space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className="bg-card p-3 rounded-lg border border-gray-700">
            <p className="text-textSecondary text-sm">{msg.platform} - {msg.author}</p>
            <p className="text-text">{msg.text}</p>
            <RecommendationsPanel recommendations={msg.recommendations} threatType={msg.threat_types?.[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistDetailView;
