import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SecurityIndicator from './SecurityIndicator';
import CreavenButton from './CreavenButton';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KO' },
    { code: 'fr', label: 'FR' },
  ];
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1 bg-gray-700 rounded text-white">
        {i18n.language.toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-card border border-gray-700 rounded shadow-lg z-10">
          {languages.map(lang => (
            <button key={lang.code} onClick={() => { i18n.changeLanguage(lang.code); setIsOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-text">
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = ({ agencyName = "HYBE", subRole = "admin", securityLevel = "calm", toggleSidebar }) => {
  const { t } = useTranslation();
  return (
    <header className="bg-card border-b border-gray-800 px-4 py-3 flex justify-between items-center sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="md:hidden text-text">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <h1 className="text-xl font-bold text-text">🛡️ KToxGuard - {agencyName}</h1>
      </div>
      <div className="flex items-center gap-4">
        <SecurityIndicator level={securityLevel} scope="agency" />
        <LanguageSelector />
        <CreavenButton userType={subRole} />
      </div>
    </header>
  );
};

export default Header;
