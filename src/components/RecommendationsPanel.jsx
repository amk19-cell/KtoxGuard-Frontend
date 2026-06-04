import React from 'react';

const RecommendationsPanel = ({ recommendations, threatType }) => {
  if (!recommendations || Object.keys(recommendations).length === 0) {
    return null;
  }

  // Prendre la première recommandation disponible (par type de menace ou default)
  const reco = recommendations[threatType] || recommendations.default || Object.values(recommendations)[0];
  if (!reco) return null;

  return (
    <div className="bg-card rounded-lg p-4 border border-primary/30 mt-4">
      <h4 className="text-primary font-bold mb-2">🛡️ Recommandations</h4>
      {reco.title && <p className="text-lg font-semibold mb-2">{reco.title}</p>}
      <div className="space-y-3">
        <div>
          <p className="text-textSecondary text-sm font-semibold">🔒 Juridique</p>
          <p className="text-text text-sm">{reco.legal}</p>
        </div>
        <div>
          <p className="text-textSecondary text-sm font-semibold">🧠 Psychologique</p>
          <p className="text-text text-sm">{reco.psychological}</p>
        </div>
        {reco.actions && reco.actions.length > 0 && (
          <div>
            <p className="text-textSecondary text-sm font-semibold">✅ Actions à entreprendre</p>
            <ul className="list-disc list-inside text-text text-sm">
              {reco.actions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
        )}
        {reco.creaven && (
          <div className="mt-2">
            <a
              href={reco.creaven}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline text-sm"
            >
              💬 {reco.creaven === 'https://creaven.pages.dev' ? 'Creaven – soutien psychologique' : 'Besoin d’aide ?'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationsPanel;
