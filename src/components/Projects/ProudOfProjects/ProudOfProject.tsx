'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProudOfProjects.module.css';

type Project = {
  title: string;
  url: string;
  description: string;
  alt: string;
  demoLink?: string;
  linkLabel?: string;
  stack: string[];
  impact: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: 'Parlio',
    url: 'parlio',
    description:
      'A full language learning product that turns your own sentences into real practice with AI translation, flashcards, quizzes, listening, sentence building, dialogs, games, XP, and premium flows.',
    alt: 'Parlio app preview',
    demoLink: 'https://parlio-app.netlify.app/',
    stack: ['React Native', 'TypeScript', 'AI', 'Product UX'],
    impact: 'Language learning app',
    accent: '#8b5cf6',
  },
  {
    title: 'Simple Task',
    url: 'simpletask',
    description:
      'A React Native task app live on Google Play, focused on clean daily workflows, scalable structure, and a practical mobile user experience.',
    alt: 'Simple Task project preview',
    demoLink: 'https://play.google.com/store/apps/details?id=com.bgSweden.simpletask',
    stack: ['React Native', 'Mobile', 'NativeWind'],
    impact: 'Published app',
    accent: '#22c55e',
  },
  {
    title: 'SkyTech',
    url: 'sky',
    description:
      'A responsive learning platform for children, built with React, multilingual content, EmailJS, Google Sheets submissions, and polished Framer Motion interactions.',
    alt: 'SkyTech project preview',
    demoLink: 'https://bedirgcmz-skytech.netlify.app/',
    stack: ['React', 'i18n', 'EmailJS', 'Motion'],
    impact: 'Education platform',
    accent: '#38bdf8',
  },
  {
    title: 'Parking Time',
    url: 'parking',
    description:
      'A parking management product built in a cross-functional team with Next.js, TypeScript, Tailwind, Contentful CMS, reusable components, and API integrations.',
    alt: 'Parking Time project preview',
    demoLink: 'https://parking-time-next.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'CMS', 'API'],
    impact: 'Product build',
    accent: '#f59e0b',
  },
  {
    title: 'Rosa Taxi',
    url: 'rosee',
    description:
      'A service website for a UK taxi company with custom branding, responsive UX, form flows, and a warm visual identity designed around trust and clarity.',
    alt: 'Rosa Taxi project preview',
    demoLink: 'https://www.rosetravel.co.uk/',
    stack: ['React', 'UX', 'Branding', 'EmailJS'],
    impact: 'Client delivery',
    accent: '#fb7185',
  },
  {
    title: 'Profile',
    url: 'portfolio',
    description:
      'A Next.js and TypeScript portfolio with dark/light mode, accessibility-minded UI, data-driven sections, motion, and a static export deployment flow.',
    alt: 'Portfolio project preview',
    demoLink: 'https://bedirgocmez.com',
    stack: ['Next.js', 'TypeScript', 'A11y', 'Tailwind'],
    impact: 'Personal brand',
    accent: '#2dd4bf',
  },
];

export default function ProudOfProjects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-project-heading]',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateX: -8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index),
            },
          }
        );
      });
    }, section);

    return () => context.revert();
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="featured-projects-title">
      <div className={styles.header} data-project-heading>
        <p>Selected work</p>
        <h2 id="featured-projects-title">Projects that show how I build</h2>
      </div>

      <div className={styles.showcase}>
        <aside className={styles.stickyPanel}>
          <div className={styles.eyebrow}>0{activeIndex + 1} / 0{projects.length}</div>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.impact}</p>
          <div className={styles.progressRail} aria-hidden="true">
            <span style={{ height: `${((activeIndex + 1) / projects.length) * 100}%` }} />
          </div>
        </aside>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.projectCard}
              data-project-card
              style={{ '--project-accent': project.accent } as React.CSSProperties}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <div className={styles.copy}>
                <span className={styles.projectNumber}>0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.demoLink ? (
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    {project.linkLabel || 'View live project'}
                  </a>
                ) : (
                  <span className={styles.pendingLink}>Release details coming soon</span>
                )}
              </div>

              <div className={styles.preview} aria-label={project.alt}>
                <div className={styles.browserBar}>
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  src={`/images/proudProjects/${project.url}.jpg`}
                  alt={project.alt}
                  width={640}
                  height={460}
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 92vw, 48vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
