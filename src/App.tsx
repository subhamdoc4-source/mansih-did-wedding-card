import { useEffect, useState } from 'react';
import { HeroGate } from './components/HeroGate';
import { DramaticTimer } from './components/DramaticTimer';
import { EventsSection } from './components/EventsSection';
import { LanguageToggle } from './components/LanguageToggle';

export function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Prevent any scrolling whatsoever before the user unlocks the invitation
  useEffect(() => {
    if (!isUnlocked) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    };
  }, [isUnlocked]);

  return (
    <div className={`min-h-screen bg-[#FDF6ED] text-[#FAF7EE] flex flex-col items-center selection:bg-gold-light selection:text-emerald-deep font-body overflow-x-hidden ${
      !isUnlocked ? 'h-[100dvh] overflow-hidden bg-black' : ''
    }`}>

      {/* Single Flag Circle at top right: Indian flag when English, British flag when Hindi */}
      <LanguageToggle
        currentLang={lang}
        onSelect={(newLang) => setLang(newLang)}
        onToggle={() => setLang(prev => (prev === 'en' ? 'hi' : 'en'))}
      />

      {/* 1. Hero Section (Strictly fixed/contained before unlock so zero scroll or black line occurs) */}
      <div className={`w-full ${!isUnlocked ? 'fixed inset-0 z-0 h-[100dvh]' : 'h-[100dvh]'} bg-black flex justify-center items-center overflow-hidden`}>
        <HeroGate 
          onUnlocked={() => setIsUnlocked(true)}
          lang={lang}
        />
      </div>

      {/* Subsequent sections ONLY rendered/visible after user has tapped & unlocked */}
      {isUnlocked && (
        <div className="w-full flex flex-col items-center bg-[#FDF6ED]">
          {/* 2. Dramatic Countdown Timer */}
          <div className="w-full flex justify-center bg-[#FDF6ED]">
            <DramaticTimer 
              targetDate="2026-11-25T19:00:00" 
              lang={lang}
            />
          </div>

          {/* 3. Events Section with Seamless Transitions, Parents Names & Direct Text */}
          <div className="w-full flex justify-center bg-[#FDF6ED]">
            <EventsSection lang={lang} />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
