import React from "react";

const CreavenButton = ({ userType, className = "" }) => {
  // userType: "admin", "manager", "artist"
  const labels = {
    admin: "Besoin de souffler ?",
    manager: "Besoin de souffler ?",
    artist: "Tu as besoin de parler ?",
  };

  const handleClick = () => {
    window.open("https://creaven.pages.dev", "_blank"); // URL à définir
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-secondary/20 hover:bg-secondary/30 text-secondary px-4 py-2 rounded-lg transition-all ${className}`}
    >
      {labels[userType] || "Creaven"}
    </button>
  );
};

export default CreavenButton;
