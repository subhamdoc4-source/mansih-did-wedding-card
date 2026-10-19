import React, { useState, useEffect } from 'react';
import { WEDDING_CONFIG } from '../config/weddingConfig';

interface Props {
  targetDate?: string;
  lang: 'en' | 'hi';
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const DramaticTimer: React.FC<Props> = ({ 
  targetDate = WEDDING_CONFIG.targetTimestamp,
  lang 
}) => {
  // Prevent hydration mismatch by initializing safely on the client
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    setIsClient(true);
    const target = new Date(targetDate).getTime();

    const calculateRemaining = () => {
      // Calculate remaining time from target timestamp minus current time
      // Never decrement manually, preserving accuracy across device sleeps/tabs
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPassed: false,
      });
    };

    // Calculate immediately on mount
    calculateRemaining();

    // Update countdown every second without page reloads or API calls
    const intervalId = setInterval(calculateRemaining, 1000);

    // Proper cleanup on unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const labels = lang === 'en' ? {
    title: 'Counting Down to Forever',
    sub: 'Until 25 November 2026 · Wedding Day',
    welcome: 'The Auspicious Wedding Day has arrived! Welcome to our celebration & blessings!',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MINUTES',
    seconds: 'SECONDS',
  } : {
    title: 'विवाह में शेष समय',
    sub: '25 नवम्बर 2026 · शुभ विवाह',
    welcome: 'शुभ विवाह की पावन वेला आ चुकी है! आपका हार्दिक स्वागत एवं अभिनंदन है।',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
  };

  return (
    <section 
      className="w-full max-w-[480px] mx-auto py-10 px-6 bg-[#FDF6ED] text-[#4A2A1A] flex flex-col items-center text-center relative z-20 select-none"
      style={{ border: 'none' }}
    >
      {/* Script Title */}
      <h2 
        className="text-4xl xs:text-5xl text-[#7A402D] mb-3 leading-tight"
        style={{ fontFamily: lang === 'en' ? "'Dancing Script', cursive" : "'Tiro Devanagari Hindi', serif", fontWeight: 700 }}
      >
        {labels.title}
      </h2>

      {/* Heart Divider: — ♥ — */}
      <div className="flex items-center justify-center gap-3 w-48 my-1 opacity-60">
        <div className="h-px w-full bg-[#A87964]" />
        <span className="text-[#A87964] text-xs">♥</span>
        <div className="h-px w-full bg-[#A87964]" />
      </div>

      {/* Subtitle */}
      <p 
        className="text-xs uppercase tracking-[0.2em] text-[#8C5E4A] mt-2 mb-6"
        style={{ fontFamily: lang === 'en' ? "'Jost', sans-serif" : "'Noto Serif Devanagari', serif", fontWeight: 500 }}
      >
        {labels.sub}
      </p>

      {/* 4 Rounded Square Tiles */}
      <div className="grid grid-cols-4 gap-3 w-full max-w-[340px]">
        {[
          { label: labels.days, value: isClient ? timeLeft.days : 0 },
          { label: labels.hours, value: isClient ? timeLeft.hours : 0 },
          { label: labels.minutes, value: isClient ? timeLeft.minutes : 0 },
          { label: labels.seconds, value: isClient ? timeLeft.seconds : 0 },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* The Tile */}
            <div 
              className="w-16 h-16 xs:w-[72px] xs:h-[72px] rounded-2xl flex items-center justify-center shadow-sm border border-[#D9C4B0]"
              style={{
                background: 'linear-gradient(135deg, #F5EAE0 0%, #EFE1D3 100%)',
                boxShadow: '0 4px 12px rgba(122, 64, 45, 0.08)'
              }}
            >
              <span 
                className="text-2xl xs:text-3xl text-[#3A1E14] font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {String(item.value).padStart(2, '0')}
              </span>
            </div>

            {/* Sub-label */}
            <span 
              className="text-xs tracking-[0.14em] text-[#8C5E4A] font-medium uppercase mt-2"
              style={{ fontFamily: lang === 'en' ? "'Jost', sans-serif" : "'Noto Serif Devanagari', serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Simple Warm Welcome Message when 00:00:00:00 is reached */}
      {isClient && timeLeft.isPassed && (
        <div className="mt-6 p-4 rounded-xl bg-[#F5EAE0] border border-[#D9C4B0] text-center max-w-xs animate-fade-in">
          <p 
            className="text-sm font-semibold text-[#7A402D]"
            style={{ fontFamily: lang === 'en' ? "'Jost', sans-serif" : "'Noto Serif Devanagari', serif" }}
          >
            {labels.welcome}
          </p>
        </div>
      )}

    </section>
  );
};
