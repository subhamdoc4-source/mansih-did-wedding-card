import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const AnimatedTitle: React.FC<Props> = ({
  children,
  className = '',
  style = {},
  delay = 0.05,
}) => {
  return (
    <div className="py-1 w-full flex justify-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
        style={style}
      >
        {children}
      </motion.h2>
    </div>
  );
};
