"use client"
import { AnimationControls, motion } from 'framer-motion';
import ProjectSwiper from './ProjectSwiper';

export default function SchoolProjects({ controls }: { controls: AnimationControls }) {
  return (
    <section className="min-h-[500px] bg-[--color-bg] py-10 mt-16">
      <h1 className="text-center text-xl text-[var(--color-lighter)]">Some of School&#39;s Projects</h1>
      <div className="container mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', delay: 0.2, duration: 1.2 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <ProjectSwiper />
        </motion.div>
      </div>
    </section>
  );
}
