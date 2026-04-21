import React from "react";
import { useNavigate } from "react-router-dom";

const threatLevelConfig = {
  low: { color: "safe", label: "Calme", blink: false },
  medium: { color: "warning", label: "Vigilance", blink: false },
  high: { color: "danger", label: "Critique", blink: false },
  critical: { color: "danger", label: "URGENT", blink: true },
};

const ArtistsGrid = ({ artists, role }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-card rounded-lg p-4 border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Artistes suivis</h3>
      <div className="grid grid-cols-2 gap-4">
        {artists.map((artist) => {
          const config = threatLevelConfig[artist.threatLevel];
          return (
            <div
              key={artist.id}
              className="bg-background rounded-lg p-3 cursor-pointer hover:bg-background/80 transition-all"
              onClick={() => navigate(`/dashboard/agency/artist/${artist.id}`)}
            >
              <div className="flex items-center gap-3">
                <img src={artist.photo} alt={artist.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{artist.name}</p>
                  <p className="text-textSecondary text-sm">{artist.group}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className={`text-${config.color} font-bold ${config.blink ? "animate-blink" : ""}`}>
                    {config.label}
                  </p>
                  <p className="text-textSecondary text-xs">{artist.threatCount24h} menaces/24h</p>
                </div>
              </div>
              <p className="text-textSecondary text-xs mt-2">
                Principal: {artist.dominantThreat}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistsGrid;
