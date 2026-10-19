import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  opacity: number;
  type: 'rose' | 'marigold';
}

export const PetalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalCount = Math.min(25, Math.floor(width / 16));
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: 7 + Math.random() * 10,
        speedY: 0.9 + Math.random() * 1.4,
        speedX: (Math.random() - 0.5) * 1.0,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.03,
        opacity: 0.45 + Math.random() * 0.35,
        type: Math.random() > 0.45 ? 'marigold' : 'rose',
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, p.size / 3, 0, p.size * 1.2);
      ctx.bezierCurveTo(-p.size, p.size / 3, -p.size / 2, -p.size / 2, 0, 0);

      if (p.type === 'marigold') {
        const gradient = ctx.createLinearGradient(-p.size / 2, -p.size / 2, p.size / 2, p.size);
        gradient.addColorStop(0, '#FFE873');
        gradient.addColorStop(0.6, '#F59E0B');
        gradient.addColorStop(1, '#D97706');
        ctx.fillStyle = gradient;
      } else {
        const gradient = ctx.createLinearGradient(-p.size / 2, -p.size / 2, p.size / 2, p.size);
        gradient.addColorStop(0, '#FFA5B4');
        gradient.addColorStop(0.5, '#E11D48');
        gradient.addColorStop(1, '#9F1239');
        ctx.fillStyle = gradient;
      }

      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(p.angle * 2) * 0.7 + p.speedX;
        p.angle += p.spinSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      /* Positioned absolute ONLY inside Events container so it NEVER touches HeroGate */
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
};
