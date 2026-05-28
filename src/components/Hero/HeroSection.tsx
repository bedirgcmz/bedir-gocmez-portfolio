"use client"
import ParticlesBackground from './ParticlesBackground';
import HireMeButton from './HireMeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import TypeText from '../Typewriter/Typewriter';
import TouchMeSidebar from './TouchMeSideBar/TouchMeSidebar';
import { motion } from 'framer-motion'
import DeveloperShowcase from './DeveloperShowcase';

export default function HeroSection() {

const fromBottomVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], }, }
}

  return (
    <div className='max-w-screen'>
    <ParticlesBackground />
    <section
      className="relative flex flex-col lg:flex-row gap-8 max-w-[1600px] m-auto items-center justify-around text-center min-h-[calc(100vh-70px)] px-4 py-10 lg:py-0 overflow-hidden"
    >
        <div className='flex flex-col justify-between items-center md:items-start w-[92%] lg:w-[48%] max-w-[640px]'>
            <div className='flex flex-col items-center md:flex-row items-centr justify-between'>
                <TouchMeSidebar />
                <div className='flex items-center md:items-start flex-col md-min-w-[482px]'>
                    <motion.p
                      variants={fromBottomVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="mb-3 z-10 text-xs sm:text-sm uppercase tracking-[0.28em] text-[var(--color-hover)] dark:text-[var(--color-active)]"
                    >
                      Full-Stack Developer - Stockholm
                    </motion.p>
                    <h1 className="w-full max-xs:text-3xl text-4xl lg:text-5xl font-bold mb-4 z-10 md:text-left text-[var(--color-active)] dark:text-[var(--color-active)] ">
                        I build full-stack products with polished interfaces and reliable foundations.{' '} <br />
                        <span className="text-[var(--color-hover)]"><TypeText words={["Bedir Gocmez", "Full-Stack Developer"]} loop={true}/></span>
                    </h1>
                    <motion.p
                      variants={fromBottomVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-lg md:text-1xl lg:text-2xl mb-6 text-gray-600 dark:text-gray-300 z-10 md:text-left max-w-[95vw] md:max-w-[365px] lg:max-w-[450px]">
                      I turn ideas into responsive web and mobile experiences with React, Next.js, TypeScript, APIs, and a strong eye for product detail.
                    </motion.p>
                    <div className='flex gap-6 items-center'>
                        <a href="#about" className="bg-[var(--color-active)] dark:bg-[var(--color-active-darker)] bg-btn-bg-hover max-xs:px-1 max-xs:py-1 flex gap-2 items-center justify-center text-white w-[140px] px-2 py-3 rounded-full z-10 animated hover:scale-105 transition font-semibold">
                            About Me <FontAwesomeIcon icon={faArrowDown} className='max-w-[12px]'/>
                        </a>
                    <HireMeButton />
                    </div>
                </div>
            </div>
        </div>
        <DeveloperShowcase />
    </section>
    </div>
  );
}
