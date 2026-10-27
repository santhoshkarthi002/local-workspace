import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { currentThemeMeta } = useTheme();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-50 pointer-events-none transition-colors duration-300"
      style={{
        scaleX,
        background: `linear-gradient(90deg, ${currentThemeMeta.accentColor}, ${currentThemeMeta.secondaryColor})`,
        boxShadow: `0 0 14px ${currentThemeMeta.accentColor}`,
      }}
    />
  );
};


