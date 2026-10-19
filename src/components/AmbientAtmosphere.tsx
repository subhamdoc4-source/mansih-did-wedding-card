import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'marigold' | 'rose' | 'dust';
  opacity: number;
  swayDelay: number;
}

export const AmbientAtmosphere: React.FC = () => {
  // Deterministic particle set for performance (6 petals + 8 gold dust)
  const particles = useMemo<Particle[]>(() => {
    return [
      { id: 1, left: 12, delay: 0.2, duration: 14, size: 18, type: 'marigold', opacity: 0.65, swayDelay: 0.1 },
      { id: 2, left: 35, delay: 4.5, duration: 16, size: 22, type: 'rose', opacity: 0.6, swayDelay: 1.2 },
      { id: 3, left: 62, delay: 2.1, duration: 15, size: 16, type: 'marigold', opacity: 0.7, swayDelay: 2.0 },
      { id: 4, left: 84, delay: 7.0, duration: 17, size: 20, type: 'rose', opacity: 0.55, swayDelay: 0.8 },
      { id: 5, left: 24, delay: 9.5, duration: 13, size: 15, type: 'rose', opacity: 0.65, swayDelay: 1.5 },
      { id: 6, left: 74, delay: 11.2, duration: 18, size: 21, type: 'marigold', opacity: 0.6, swayDelay: 2.4 },
      // Gold dust specks
      { id: 7, left: 18, delay: 1.0, duration: 11, size: 4, type: 'dust', opacity: 0.5, swayDelay: 0.5 },
      { id: 8, left: 45, delay: 3.2, duration: 12, size: 5, type: 'dust', opacity: 0.6, swayDelay: 1.1 },
      { id: 9, left: 55, delay: 6.8, duration: 10, size: 3, type: 'dust', opacity: 0.45, swayDelay: 1.8 },
      { id: 10, left: 88, delay: 2.5, duration: 13, size: 4, type: 'dust', opacity: 0.55, swayDelay: 0.3 },
      { id: 11, left: 28, delay: 8.0, duration: 11, size: 5, type: 'dust', opacity: 0.5, swayDelay: 2.2 },
    ];
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-15 overflow-hidden w-full max-w-[480px] mx-auto select-none"
      aria-hidden="true"
    >
      {particles.map((p) => {
        if (p.type === 'dust') {
          return (
            <div
              key={p.id}
              className="absolute rounded-full animate-gold-drift"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: 'radial-gradient(circle, #FFE082 0%, rgba(212,175,55,0.2) 70%, transparent 100%)',
                boxShadow: '0 0 8px #FFD54F',
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        }

        const isRose = p.type === 'rose';
        const color = isRose ? '#E11D48' : '#F59E0B';
        const shadow = isRose ? 'rgba(225, 29, 72, 0.4)' : 'rgba(245, 158, 11, 0.4)';

        return (
          <div
            key={p.id}
            className="absolute animate-petal-fall"
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            <div
              className="animate-petal-sway"
              style={{
                animationDuration: '3.6s',
                animationDelay: `${p.swayDelay}s`,
              }}
            >
              <svg
                width={p.size}
                height={p.size * 1.3}
                viewBox="0 0 24 32"
                fill="none"
                style={{
                  filter: `drop-shadow(0 2px 6px ${shadow})`,
                  opacity: p.opacity,
                }}
              >
                <path
                  d="M12 0C16 7 24 14 24 22C24 27.5 18.6 32 12 32C5.4 32 0 27.5 0 22C0 14 8 7 12 0Z"
                  fill={color}
                  fillOpacity="0.85"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
