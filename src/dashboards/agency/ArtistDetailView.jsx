
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages } from '../../api/ktoxguard';
import RecommendationsPanel from '../../components/RecommendationsPanel';

const ArtistDetailView = () => {
  const { id } = useParams();
  const [artistMessages, setArtistMessages] = useState([]);

  useEffect(() => {
    // Pour simplifier, on récupère tous les messages et on filtre par auteur (à améliorer)
    getMessages(100).then(data => {
      // Simuler des messages pour cet artiste (vous devriez avoir un champ artist_id)
      setArtistMessages(data.filter(m => m.author === id || m.author === `artist_${id}`));
    });
  }, [id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Messages concernant l’artiste {id}</h2>
      {artistMessages.length === 0 && <p>Aucun message trouvé.</p>}
      <div className="space-y-4">
        {artistMessages.map((msg) => (
          <div key={msg.id} className="bg-card p-3 rounded-lg border border-gray-700">
            <p className="text-textSecondary">{msg.text}</p>
            <p className="text-sm text-danger">Toxique ? {msg.label}</p>
            <RecommendationsPanel recommendations={msg.recommendations} threatType={msg.threat_types?.[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistDetailView;
