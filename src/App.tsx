import { useRef, useState } from 'react';
import { HeroGate } from './components/HeroGate';
import { DramaticTimer } from './components/DramaticTimer';
import { EventsSection } from './components/EventsSection';
import { LanguageToggle } from './components/LanguageToggle';

export function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleVideoStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className={`min-h-screen bg-[#FDF6ED] text-[#FAF7EE] flex flex-col items-center selection:bg-gold-light selection:text-emerald-deep font-body overflow-x-hidden ${
      !isUnlocked ? 'h-[100dvh] overflow-hidden bg-black' : ''
    }`}>
      
      {/* Background audio without visible button */}
      <audio
        ref={audioRef}
        src="/assets/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* Single Flag Circle at top right: Indian flag when English, British flag when Hindi */}
      <LanguageToggle
        currentLang={lang}
        onSelect={(newLang) => setLang(newLang)}
        onToggle={() => setLang(prev => (prev === 'en' ? 'hi' : 'en'))}
      />

      {/* 1. Hero Section (Strict 100dvh - Only thing visible initially) */}
      <div className="w-full h-[100dvh] bg-black flex justify-center items-center overflow-hidden">
        <HeroGate 
          onVideoStart={handleVideoStart}
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
