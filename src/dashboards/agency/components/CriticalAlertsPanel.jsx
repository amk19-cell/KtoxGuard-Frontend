import React from "react";

const CriticalAlertsPanel = ({ alerts, onMarkHandled, role }) => {
  const criticalAlerts = alerts.filter((a) => a.type === "death_threat");

  return (
    <div className="bg-card rounded-lg p-4 border border-danger/30">
      <h3 className="text-lg font-semibold mb-4 text-danger">⚠️ Alertes critiques</h3>
      {criticalAlerts.length === 0 ? (
        <p className="text-textSecondary text-sm">Aucune alerte critique</p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {criticalAlerts.map((alert) => (
            <div key={alert.id} className="bg-background rounded-lg p-3 border-l-4 border-danger">
              <p className="font-semibold">{alert.artistName}</p>
              <p className="text-xs text-textSecondary">{alert.type} - {alert.platform}</p>
              <p className="text-xs text-textSecondary">{new Date(alert.timestamp).toLocaleString()}</p>
              <button
                onClick={() => onMarkHandled(alert.id)}
                className="mt-2 text-xs text-primary hover:underline"
              >
                Marquer comme traité
              </button>
              {role === "manager" && (
                <button className="mt-2 ml-3 text-xs text-secondary hover:underline">
                  Escalader à l'admin
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CriticalAlertsPanel;
