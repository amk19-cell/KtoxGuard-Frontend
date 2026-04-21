import React from "react";

const StatsCards = ({ stats }) => {
  const cards = [
    { label: "Messages analysés aujourd'hui", value: stats.totalToday, color: "primary" },
    { label: "Menaces détectées aujourd'hui", value: stats.totalThreatsToday, color: "danger" },
    { label: "Artistes sous alerte active", value: stats.artistsUnderAlert, color: "warning" },
    { label: "Raids détectés ce mois", value: stats.raidsThisMonth, color: "secondary" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-card rounded-lg p-4 border border-gray-800">
          <p className="text-textSecondary text-sm">{card.label}</p>
          <p className={`text-3xl font-bold text-${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
