import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface Props {
  title: string;
  targetDate: string; // "2026-11-25T19:00:00"
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export const CountdownTimer: React.FC<Props> = ({ title, targetDate, labels }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full my-6 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs font-body mb-3">
        <Clock size={13} className="text-gold" />
        <span>{title}</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 max-w-xs mx-auto">
        {[
          { label: labels.days, value: timeLeft.days },
          { label: labels.hours, value: timeLeft.hours },
          { label: labels.minutes, value: timeLeft.minutes },
          { label: labels.seconds, value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-gradient-to-b from-[#103827] to-[#081F15] border border-gold/40 shadow-md"
          >
            <span className="font-rozha text-2xl xs:text-3xl text-gold-shimmer font-bold leading-tight">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-ivory/80 font-body uppercase tracking-wider mt-0.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
