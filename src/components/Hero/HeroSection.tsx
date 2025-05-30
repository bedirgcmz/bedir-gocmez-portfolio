import styles from './Hero.module.css';
import ParticlesBackground from './ParticlesBackground';
import Photo from '../About/Photo';
import SocialMediaIcons from './SocialMediaIcons';
import HireMeButton from '../About/HireMeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import TypeText from '../Typewriter/Typewriter';

export default function HeroSection() {
  return (
    <section
      className={`relative flex flex-col md:flex-row gap-6 items-center justify-around text-center h-[90vh] px-4 `}
    >
        <div className='flex flex-col justify-between items-center md:items-start w-[90%] md:max-w-[45%]'>
            <ParticlesBackground />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 z-10 md:text-left text-[var(--color-active-darker)] dark:text-[var(--color-active)] ">
                Hi There, I’m{' '} <br />
                <span className="text-[var(--color-hover)]"><TypeText words={["Bedir Gocmez", "Frontend Developer"]} loop={true}/></span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 text-gray-600 dark:text-gray-300 z-10 md:text-left max-w-[450px]">
            I specialize in building responsive, accessible, and modern web interfaces that look great on any screen.
            </p>
            <SocialMediaIcons />
            <div className='flex gap-6 items-center'>
                <a href="#about" className="bg-[var(--color-active)] dark:bg-[var(--color-active-darker)] flex gap-2 items-center justify-center text-white w-[140px] px-2 py-3 rounded-full z-10 hover:scale-105 transition font-semibold">
                    About Me <FontAwesomeIcon icon={faArrowDown} className='max-w-[12px]'/>
                </a>
                <HireMeButton />
            </div>
        </div>

        <Photo />
    </section>
  );
}
