"use client"
import ParticlesBackground from './ParticlesBackground';
import Photo from './Photo';
import HireMeButton from './HireMeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import TypeText from '../Typewriter/Typewriter';
import TouchMeSidebar from './TouchMeSideBar/TouchMeSidebar';
import { motion } from 'framer-motion'

export default function HeroSection() {

const fromBottomVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], }, }
}

  return (
    <>
    <ParticlesBackground />
    <section
      className={`relative flex flex-col md:flex-row gap-6 max-w-[1600px] m-auto items-center justify-around text-center h-[calc(100vh-70px)] px-4 `}
    >
        <div className='flex flex-col justify-between items-center md:items-start w-[90%] md:w-[51%] max-w-[600px]   mt-[-50px] md-mt-0'>
            <div className='flex flex-col items-center md:flex-row items-centr justify-between'>
                <TouchMeSidebar />
                <div className='flex items-center md:items-start flex-col min-w-[482px]'>
                    <h1 className="w-full max-xs:text-3xl text-4xl lg:text-5xl font-bold mb-4 z-10 md:text-left text-[#1a7b81] dark:text-[var(--color-active)] ">
                        Hi There, I’m{' '} <br />
                        <span className="text-[var(--color-hover)]"><TypeText words={["Bedir Gocmez", "Frontend Developer"]} loop={true}/></span>
                    </h1>
                    <motion.p
                      variants={fromBottomVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-lg md:text-1xl lg:text-2xl mb-6 text-gray-600 dark:text-gray-300 z-10 md:text-left max-w-[95vw] md:max-w-[365px] lg:max-w-[450px]">
                      I specialize in building responsive, accessible, and modern web interfaces that look great on any screen.
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
        <Photo />
    </section>
    </>
  );
}
