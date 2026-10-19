import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  color?: string;
  width?: string;
  hasHeart?: boolean;
  className?: string;
  opacity?: number;
}

export const ExpandingDivider: React.FC<Props> = ({
  color = '#B45309',
  width = 'w-40',
  hasHeart = true,
  className = 'my-3',
  opacity = 0.6,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center gap-3 ${width} ${className} select-none`}
    >
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full"
        style={{ background: color }}
      />
      {hasHeart && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="text-xs select-none"
          style={{ color }}
        >
          ♥
        </motion.span>
      )}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full"
        style={{ background: color }}
      />
    </motion.div>
  );
};
