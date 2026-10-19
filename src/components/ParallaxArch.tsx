import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  height?: number;
  archRadius?: string;
}

export const ParallaxArch: React.FC<Props> = ({
  src,
  alt,
  height = 230,
  archRadius = '160px 160px 20px 20px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth optical depth shift inside the window (Jharokha effect)
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.05, 1.14]);

  return (
    <div
      ref={containerRef}
      className="w-full relative my-2 overflow-hidden flex items-center justify-center pointer-events-none select-none"
      style={{
        height: `${height}px`,
        borderRadius: archRadius,
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        willChange: 'transform',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-[132%] object-cover object-center absolute -top-[16%]"
        loading="lazy"
      />
    </div>
  );
};
