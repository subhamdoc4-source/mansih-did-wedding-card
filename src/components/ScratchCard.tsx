import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CalendarCheck, Sparkles } from 'lucide-react';

interface Props {
  title: string;
  instruction: string;
  revealedDate: string;
  revealedSub: string;
}

export const ScratchCard: React.FC<Props> = ({
  title,
  instruction,
  revealedDate,
  revealedSub
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    // Fill with luxury gold textured gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#B88E18');
    gradient.addColorStop(0.3, '#FFE8A3');
    gradient.addColorStop(0.6, '#D4AF37');
    gradient.addColorStop(1, '#8A670E');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Ornate gold border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, width - 12, height - 12);

    // Shimmer Text on canvas
    ctx.fillStyle = '#3E2405';
    ctx.font = 'bold 15px "Noto Serif Devanagari", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ खुरचें और तिथि जानें ✨', width / 2, height / 2 - 10);
    ctx.font = '12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Scratch here to reveal date', width / 2, height / 2 + 14);

  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    checkScratchedPercentage();
  };

  const checkScratchedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 32) {
        if (pixels[i] === 0) transparentPixels++;
      }
      const totalSampled = pixels.length / 32;
      const ratio = transparentPixels / totalSampled;

      if (ratio > 0.38) {
        setIsRevealed(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#FFF', '#E11D48']
        });
      }
    } catch {
      // ignore
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing.current) {
      scratch(e.clientX, e.clientY);
    }
  };

  return (
    <div className="w-full my-6 p-4 rounded-3xl bg-gradient-to-b from-[#143d2b] to-[#0A261B] border border-gold/40 shadow-royal text-center relative overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 border border-gold/15 rounded-full pointer-events-none" />

      <div className="flex items-center justify-center gap-2 mb-2 text-gold-shimmer">
        <Sparkles size={16} />
        <h3 className="font-rozha text-lg tracking-wide">{title}</h3>
        <Sparkles size={16} />
      </div>
      
      <p className="text-xs text-gold-light/80 font-body mb-4">
        {instruction}
      </p>

      {/* Card container */}
      <div className="relative w-full max-w-[290px] h-[120px] mx-auto rounded-2xl overflow-hidden shadow-gold-glow border border-gold/70 bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E6] to-[#FFEEC2] flex flex-col items-center justify-center p-3 select-none">
        
        {/* Revealed Content Behind Canvas */}
        <div className="flex flex-col items-center justify-center text-center">
          <CalendarCheck className="text-kumkum mb-1 animate-pulse" size={26} />
          <h4 className="font-rozha text-2xl font-bold text-kumkum tracking-wide">
            {revealedDate}
          </h4>
          <p className="text-xs font-semibold text-emerald-deep font-body mt-0.5">
            {revealedSub}
          </p>
        </div>

        {/* Scratchable Canvas Overlay */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={() => { isDrawing.current = true; }}
            onMouseUp={() => { isDrawing.current = false; }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-500"
          />
        )}
      </div>
    </div>
  );
};
