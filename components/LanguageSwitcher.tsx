import React from 'react';
import { Language } from '../types';
import { soundService } from '../services/soundService';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    soundService.playClick();
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition-colors text-xl shadow-md"
    >
      {language === 'en' ? 'AR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;