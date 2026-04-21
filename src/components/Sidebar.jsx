import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ subRole }) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard/agency", icon: "📊" },
    { name: "Mes artistes", path: "/dashboard/agency/artists", icon: "🎤" },
    { name: "Alertes critiques", path: "/dashboard/agency/alerts", icon: "⚠️" },
    { name: "Rapports", path: "/dashboard/agency/reports", icon: "📄" },
  ];

  if (subRole === "artist") {
    return null; // L'artiste n'a pas de sidebar
  }

  return (
    <aside className="w-64 bg-card border-r border-gray-800 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-textSecondary hover:bg-card/50 hover:text-text"
              }`
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
