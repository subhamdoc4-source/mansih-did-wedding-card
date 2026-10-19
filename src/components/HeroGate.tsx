import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Props {
  onVideoStart?: () => void;
  onUnlocked?: () => void;
  lang: 'en' | 'hi';
}

export const HeroGate: React.FC<Props> = ({ onVideoStart, onUnlocked, lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  const handleStart = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    if (onVideoStart) {
      onVideoStart();
    }

    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      } catch (err) {
        console.log('Video play error:', err);
      }
    }

    // After 3 seconds, smoothly reveal couple names and date
    window.setTimeout(() => {
      setShowText(true);
      if (onUnlocked) {
        onUnlocked();
      }
    }, 3000);
  };

  const textContent = lang === 'en' ? {
    celebration: 'Royal Wedding Celebration',
    bride: 'Ragani Yadav',
    connector: 'weds',
    groom: 'Pranay Yadav',
    date: '25 November 2026',
    sub: 'Wednesday · Pratapgarh, U.P.'
  } : {
    celebration: 'मांगलिक परिणय उत्सव',
    bride: 'रागनी यादव',
    connector: 'संग',
    groom: 'प्रणय यादव',
    date: '25 नवम्बर 2026',
    sub: 'दिन बुधवार · प्रतापगढ़, उ.प्र.'
  };

  const titleFont = lang === 'en' ? "'Cormorant Garamond', serif" : "'Noto Serif Devanagari', serif";
  const bodyFont = lang === 'en' ? "'Jost', sans-serif" : "'Noto Serif Devanagari', serif";

  return (
    <div 
      onClick={handleStart}
      /* Covers full screen 100dvh, max-w-[480px] centered with no side margins on mobile */
      className="relative w-full h-[100dvh] max-w-[480px] mx-auto overflow-hidden bg-black select-none cursor-pointer flex flex-col justify-center items-center shadow-2xl"
    >
      {/* 1. Underlying 1080p Video - 14% bottom crop eliminates Gemini watermark */}
      <video
        ref={videoRef}
        src="/assets/hero-video.mp4"
        playsInline
        muted
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
        className="absolute -top-1 left-0 w-full h-[114%] object-cover object-top pointer-events-none"
      />

      {/* 2. Crisp 1080p Static Cover Image (No Text, matching video 1:1) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 z-10 w-full h-full overflow-hidden"
          >
            <img
              src="/assets/hero-card-cover.png"
              alt="Wedding Invitation Cover"
              className="absolute -top-1 left-0 w-full h-[114%] object-cover object-top pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Soft Dark Vignette for Text Contrast */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-black/55 via-black/35 to-black/85"
          />
        )}
      </AnimatePresence>

      {/* 4. Super Smooth Reappearing Couple & Date Text (No Box, 1.5x Larger Typography) */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center py-10 px-4 pointer-events-none text-center">
        
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.8, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center w-full max-w-sm px-2 text-center"
            >
              {/* Auspicious Flourish */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1.0 }}
                className="flex items-center gap-2 mb-4 text-gold-shimmer"
              >
                <Sparkles size={16} />
                <span 
                  className="text-xs xs:text-sm uppercase tracking-[0.28em] text-gold-light"
                  style={{ fontFamily: bodyFont, fontWeight: 500 }}
                >
                  {textContent.celebration}
                </span>
                <Sparkles size={16} />
              </motion.div>

              {/* Bride Name (1.5x Larger) */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="font-bold tracking-wide text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.95)] leading-[1.08] text-center"
                style={{ 
                  fontFamily: titleFont,
                  fontSize: 'clamp(50px, 12vw, 70px)'
                }}
              >
                {textContent.bride}
              </motion.h1>

              {/* Connector: "weds" or "संग" (1.5x Larger) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 1.0 }}
                className="my-3 flex items-center justify-center gap-3 w-full"
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-gold" />
                <span 
                  className="text-gold-shimmer drop-shadow-lg"
                  style={{ 
                    fontFamily: titleFont, 
                    fontSize: 'clamp(32px, 8vw, 44px)',
                    fontStyle: lang === 'en' ? 'italic' : 'normal', 
                    fontWeight: 500 
                  }}
                >
                  {textContent.connector}
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold to-gold" />
              </motion.div>

              {/* Groom Name (1.5x Larger) */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 1.2 }}
                className="font-bold tracking-wide text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.95)] leading-[1.08] text-center"
                style={{ 
                  fontFamily: titleFont,
                  fontSize: 'clamp(50px, 12vw, 70px)'
                }}
              >
                {textContent.groom}
              </motion.h1>

              {/* Date & Details (1.5x Larger) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1.2 }}
                className="mt-6 pt-5 border-t border-gold/40 flex flex-col items-center w-full"
              >
                <p 
                  className="font-bold tracking-wider text-gold-shimmer drop-shadow-lg"
                  style={{ 
                    fontFamily: titleFont,
                    fontSize: 'clamp(32px, 8vw, 46px)'
                  }}
                >
                  {textContent.date}
                </p>
                <p 
                  className="text-xs xs:text-sm uppercase tracking-[0.2em] text-ivory/90 mt-1"
                  style={{ fontFamily: bodyFont, fontWeight: 500 }}
                >
                  {textContent.sub}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
