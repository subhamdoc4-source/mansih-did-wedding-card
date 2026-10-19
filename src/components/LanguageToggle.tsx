import React from 'react';

interface Props {
  currentLang: 'en' | 'hi';
  onSelect?: (lang: 'en' | 'hi') => void;
  onToggle?: () => void;
}

export const LanguageToggle: React.FC<Props> = ({ currentLang, onSelect, onToggle }) => {
  const handleToggle = () => {
    const nextLang = currentLang === 'en' ? 'hi' : 'en';
    if (onSelect) {
      onSelect(nextLang);
    } else if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center select-none pointer-events-auto">
      {currentLang === 'en' ? (
        /* When in English: Show ONLY Indian flag circle to switch to Hindi */
        <button
          onClick={handleToggle}
          title="हिंदी में देखें"
          aria-label="Switch to Hindi"
          className="w-8 h-8 rounded-full overflow-hidden shadow-lg border border-white/50 hover:scale-105 active:scale-90 transition-transform p-0 flex items-center justify-center bg-transparent cursor-pointer"
        >
          <svg className="w-full h-full object-cover" viewBox="0 0 225 150" preserveAspectRatio="xMidYMid slice">
            <rect width="225" height="50" fill="#FF9933"/>
            <rect y="50" width="225" height="50" fill="#FFFFFF"/>
            <rect y="100" width="225" height="50" fill="#128807"/>
            <circle cx="112.5" cy="75" r="20" fill="none" stroke="#000080" strokeWidth="3.5"/>
            <circle cx="112.5" cy="75" r="4" fill="#000080"/>
          </svg>
        </button>
      ) : (
        /* When in Hindi: Show ONLY British flag circle to switch to English */
        <button
          onClick={handleToggle}
          title="View in English"
          aria-label="Switch to English"
          className="w-8 h-8 rounded-full overflow-hidden shadow-lg border border-white/50 hover:scale-105 active:scale-90 transition-transform p-0 flex items-center justify-center bg-transparent cursor-pointer"
        >
          <svg className="w-full h-full object-cover" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
            <clipPath id="s">
              <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clipPath="url(#s)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};
