'use client';

import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type DividerCircleProps = {
  sectionId: string;
};

export default function DividerCircle({sectionId}: DividerCircleProps) {
  const { theme } = useTheme();
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const leftLineVariants = {
    hidden: { width: 0 },
    visible: { width: '40%', transition: { duration: 0.6 } },
  };

  const rightLineVariants = {
    hidden: { width: 0 },
    visible: { width: '40%', transition: { duration: 0.6 } },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const primaryColor = theme === 'dark'
    ? 'bg-[var(--color-active-darker)]'
    : 'bg-[var(--color-active)]';

  return (
    <div id={sectionId} ref={ref} className="flex items-center justify-center w-full my-32">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={leftLineVariants}
        className={`h-1 rounded-full ${primaryColor}`}
      />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={circleVariants}
        className={`w-6 h-6 mx-4 rounded-full ${primaryColor}`}
      />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={rightLineVariants}
        className={`h-1 rounded-full ${primaryColor}`}
      />
    </div>
  );
}
