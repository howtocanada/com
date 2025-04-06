
import { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="text-sm text-white hover:underline"
    >
      {language === 'en' ? 'Français' : 'English'}
    </button>
  );
};

export default LanguageToggle;
