import React, { useEffect, useState } from 'react';
import { getMessages, getStats } from '../../api/ktoxguard';
import RecommendationsPanel from '../../components/RecommendationsPanel';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchStats();
    fetchMessages();
  }, []);

  const fetchStats = async () => {
    const data = await getStats();
    setStats(data);
  };

  const fetchMessages = async () => {
    const data = await getMessages(20);
    setMessages(data);
  };

  if (!stats) return <div className="text-text">Chargement...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg"><p>Total messages</p><p className="text-2xl font-bold">{stats.total_messages}</p></div>
        <div className="bg-card p-4 rounded-lg"><p>Messages toxiques</p><p className="text-2xl font-bold text-danger">{stats.toxic_count}</p></div>
        <div className="bg-card p-4 rounded-lg"><p>% toxicité</p><p className="text-2xl font-bold">{stats.toxic_percentage}%</p></div>
        <div className="bg-card p-4 rounded-lg"><p>Menaces / type</p><p className="text-sm">{Object.entries(stats.by_threat_type).slice(0,2).map(([k,v]) => `${k}:${v}`).join(', ')}</p></div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Derniers messages</h3>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-card p-3 rounded-lg border border-gray-700">
            <p className="text-text"><strong>{msg.platform || 'unknown'}</strong> – {msg.author || 'anonyme'}</p>
            <p className="text-textSecondary">{msg.text}</p>
            <p className={`text-sm font-bold ${msg.label === 'toxique' ? 'text-danger' : 'text-safe'}`}>
              {msg.label} (confiance {msg.confidence})
            </p>
            <button
              onClick={() => setSelectedMessage(selectedMessage?.id === msg.id ? null : msg)}
              className="mt-2 text-primary text-sm underline"
            >
              {selectedMessage?.id === msg.id ? 'Masquer les recommandations' : 'Voir les recommandations'}
            </button>
            {selectedMessage?.id === msg.id && (
              <RecommendationsPanel
                recommendations={msg.recommendations}
                threatType={msg.threat_types?.[0]}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
