import React, { useEffect, useState } from 'react';
import { getStats, getMessages } from '../../api/ktoxguard';
import RecommendationsPanel from '../../components/RecommendationsPanel';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedMsgId, setSelectedMsgId] = useState(null);

  const fetchData = async () => {
    const [statsData, messagesData] = await Promise.all([getStats(), getMessages(50)]);
    setStats(statsData);
    setMessages(messagesData);
  };

  useEffect(() => { fetchData(); const interval = setInterval(fetchData, 30000); return () => clearInterval(interval); }, []);

  if (!stats) return <div className="text-text">Chargement des statistiques...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg"><p className="text-textSecondary">Total messages</p><p className="text-2xl font-bold">{stats.total_messages}</p></div>
        <div className="bg-card p-4 rounded-lg"><p className="text-textSecondary">Toxiques</p><p className="text-2xl font-bold text-danger">{stats.toxic_count}</p></div>
        <div className="bg-card p-4 rounded-lg"><p className="text-textSecondary">% toxicité</p><p className="text-2xl font-bold">{stats.toxic_percentage}%</p></div>
        <div className="bg-card p-4 rounded-lg"><p className="text-textSecondary">Menaces / type</p><div className="text-sm">{Object.entries(stats.by_threat_type).slice(0,3).map(([k,v]) => <div key={k}>{k}: {v}</div>)}</div></div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Derniers messages toxiques</h3>
      <div className="space-y-4">
        {messages.filter(m => m.label === 'toxique').slice(0,15).map(msg => (
          <div key={msg.id} className="bg-card p-3 rounded-lg border border-gray-700">
            <p className="text-textSecondary text-sm">{msg.platform || 'reddit'} - {msg.author || 'anonyme'}</p>
            <p className="text-text">{msg.text}</p>
            <button onClick={() => setSelectedMsgId(selectedMsgId === msg.id ? null : msg.id)} className="text-primary text-sm underline mt-1">Recommandations</button>
            {selectedMsgId === msg.id && <RecommendationsPanel recommendations={msg.recommendations} threatType={msg.threat_types?.[0]} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
