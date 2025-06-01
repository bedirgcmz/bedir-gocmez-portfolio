

'use client';
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
      "I built a fully responsive website for SkyTech Edu Academy, which offers coding and various courses for children worldwide. Powered by React, the site features smooth animations with Frame Motion, automatic form submission to Google Sheets, and email integration via EmailJS. It also includes three-language support using Context API and saves the user's language preference with LocalStorage.",
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
      'I contributed to the ParkingTime project as part of a cross-functional team. This parking management system was developed using Next.js, TypeScript, Tailwind CSS, and Contentful CMS for content management. Our team followed Agile methodologies and managed the project workflow via Jira. I was involved in building reusable React components, integrating API endpoints, and ensuring accessibility and responsiveness across devices.',
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
      'A modern portfolio section built with React, Next.js, and TypeScript. It features a responsive Swiper carousel with dynamic data fetched from a local JSON file. The UI supports dark/light mode, includes smooth Framer Motion animations, and is styled with Tailwind CSS and modular CSS for clean and scalable design. Also, my Portfolio site has passed 100% accessibility (WCAG) tests.',
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
      <h1 className="text-center text-xl text-[var(--color-hover)]">Projects I’m Proud Of</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.hoverText}>
              {screenWidth ? 'Click me!' : 'Hover me!'}
            </p>
            <div className={styles.imageContainer}>
              <img src={`/images/${project.url}.jpg`} alt={project.alt} />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudOfProjects;
