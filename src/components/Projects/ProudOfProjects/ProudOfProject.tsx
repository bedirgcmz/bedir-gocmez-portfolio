

'use client';
import { motion } from 'framer-motion';
import styles from './ProudOfProjects.module.css';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  url: string;
  description: string;
  alt: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: 'SkyTech',
    url:"sky",
    description:
      "I built a fully responsive website for SkyTech Edu Academy, offering coding and other courses for children worldwide. Built with React, it features smooth Framer Motion animations, form submissions to Google Sheets, EmailJS integration, and three-language support via Context API with language preference saved in LocalStorage.",
    alt: 'SkyTech project image',
    demoLink: 'https://bedirgcmz-skytech.netlify.app/',
  },
  {
    title: 'Rose Taxi',
    url:"rosee",
    description:
      'For this taxi company in the UK, I created a sweet and user-friendly website. You’ll love the components designed with a focus on UI and UX. I also designed a custom logo for this site. EmailJS was used for sending emails, and the website is fully responsive. I worked with color palettes to find the most harmonious combinations, resulting in a beautifully crafted website.',
    alt: 'Rose Taxi project image',
    demoLink: 'https://www.rosetravel.co.uk/',
  },
  {
    title: 'Parking Time',
    url:"parking",
    description:
      'I contributed to the ParkingTime project as part of a cross-functional team. Built with Next.js, TypeScript, Tailwind CSS, and Contentful CMS, the parking management system followed Agile practices and was managed via Jira. I developed reusable React components, integrated API endpoints, and ensured accessibility and responsiveness across devices.',
    alt: 'Parking Time project image',
    demoLink: 'https://parking-time-next.vercel.app/',
  },
  {
    title: 'Simple Task',
    url:"simpletask",
    description:
      'This React Native application helps users manage their daily tasks efficiently. Built with technologies like React Navigation and Tailwind CSS (via NativeWind), it offers a clean, responsive, and user-friendly interface. The app is currently live on Google Play and available for download. Its codebase is scalable and developer-friendly, making it easy to maintain and extend.',
    alt: 'Simple Task project image',
    demoLink: 'https://play.google.com/store/apps/details?id=com.bgSweden.simpletask',
  },
  {
    title: 'Portfolio',
    url: 'portfolio',
    description:
      'A modern portfolio built with React, Next.js, and TypeScript. It features a responsive Swiper carousel with data from a local JSON file, supports dark/light mode, includes Framer Motion animations, and uses Tailwind CSS with modular CSS for scalable design. The site also passed 98% accessibility (WCAG) tests.',
    alt: 'Portfolio Swiper project image',
    demoLink: 'www.bedirgocmez.com',
  }
  
];

const ProudOfProjects = () => {
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl text-[var(--color-lighter)]">Projects I’m Proud Of</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <motion.div 
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", delay: (0.13 * index), duration: 1.6 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className={styles.card} key={index}>
            <p className={styles.hoverText}>
              {screenWidth ? 'Click me!' : 'Hover me!'}
            </p>
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/proudProjects/${project.url}.jpg`} alt={project.alt} />
            </div>
            <div className={styles.details}>
              <h2>{project.title}</h2>
              <p className='text-justify'>{project.description}</p>
            
                <a
                  href={project.demoLink}
                  className="see-demo btn41-43 py-1 btn-41 w-full text-white rounded-lg shadow-lg text-center bg-[var(--color-active-darker)] transition duration-300 hover:bg-[var(--color-hover)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  See demo
                </a>
            
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProudOfProjects;
