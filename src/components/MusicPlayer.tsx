import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface Props {
  autoPlayTrigger?: boolean;
  playingLabel: string;
  mutedLabel: string;
}

export const MusicPlayer: React.FC<Props> = ({ autoPlayTrigger, playingLabel, mutedLabel }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy prevented playback, user can tap manually
        setIsPlaying(false);
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log('Audio error:', err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/wedding-music.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-royal/95 border border-gold/80 text-gold-shimmer shadow-gold-glow backdrop-blur-md transition-all active:scale-95 hover:bg-emerald-deep"
        title={isPlaying ? playingLabel : mutedLabel}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <Volume2 size={16} className="text-gold" />
          </>
        ) : (
          <>
            <Music size={15} className="text-gold-light" />
            <VolumeX size={15} className="text-gold-light" />
          </>
        )}
        <span className="text-[11px] font-medium font-body hidden xs:inline text-gold-shimmer">
          {isPlaying ? playingLabel : mutedLabel}
        </span>
      </button>
    </>
  );
};
