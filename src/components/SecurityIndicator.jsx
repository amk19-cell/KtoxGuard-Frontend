import React from "react";

const SecurityIndicator = ({ level, scope }) => {
  // level: "calm", "vigilance", "critical"
  const config = {
    calm: { icon: "🟢", label: "Calme", color: "text-safe", bg: "bg-safe/10", description: "Rien d'inhabituel cette semaine" },
    vigilance: { icon: "🟡", label: "Vigilance", color: "text-warning", bg: "bg-warning/10", description: "Quelques tensions en ligne" },
    critical: { icon: "🔴", label: "Critique", color: "text-danger", bg: "bg-danger/10", description: scope === "artist" ? "Ton équipe s'occupe de tout" : "Période sensible" },
  };

  const c = config[level];

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg ${c.bg}`}>
      <span className="text-2xl">{c.icon}</span>
      <div>
        <p className={`font-bold ${c.color}`}>Niveau de sécurité - {c.label}</p>
        <p className="text-textSecondary text-sm">{c.description}</p>
      </div>
    </div>
  );
};

export default SecurityIndicator;
