import React from 'react';
import { useTranslation } from 'react-i18next';
import SecurityIndicator from './SecurityIndicator';
import CreavenButton from './CreavenButton';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 text-sm rounded bg-gray-700 hover:bg-primary text-white">EN</button>
      <button onClick={() => changeLanguage('ko')} className="px-2 py-1 text-sm rounded bg-gray-700 hover:bg-primary text-white">KO</button>
      <button onClick={() => changeLanguage('fr')} className="px-2 py-1 text-sm rounded bg-gray-700 hover:bg-primary text-white">FR</button>
    </div>
  );
};

const Header = ({ agencyName, userRole, subRole, securityLevel, scope }) => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-card border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-text">
          🛡️ {t('header.title')} - {agencyName}
        </h1>
        <p className="text-textSecondary text-sm capitalize">
          {subRole} {t('dashboard.admin')}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <SecurityIndicator level={securityLevel} scope={scope} />
        <LanguageSelector />
        <CreavenButton userType={subRole} />
      </div>
    </header>
  );
};

export default Header;
