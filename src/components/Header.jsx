import React from "react";
import SecurityIndicator from "./SecurityIndicator";
import CreavenButton from "./CreavenButton";

const Header = ({ agencyName, userRole, subRole, securityLevel, scope }) => {
  return (
    <header className="bg-card border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-text">
          🛡️ KToxGuard - {agencyName}
        </h1>
        <p className="text-textSecondary text-sm capitalize">
          {subRole} dashboard
        </p>
      </div>
      <div className="flex items-center gap-4">
        <SecurityIndicator level={securityLevel} scope={scope} />
        <CreavenButton userType={subRole} />
      </div>
    </header>
  );
};

export default Header;
