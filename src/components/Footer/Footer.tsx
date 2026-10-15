'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import VisitorCount from '../VisitorCount/VisitorCount';

const navItems = ['About', 'Skills', 'Projects', 'Experiences', 'Educations', 'Contact'];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.brandPanel}>
          <p className={styles.kicker}>Full-Stack Developer</p>
          <h2>Building useful web and mobile products with React, Next.js, TypeScript and React Native.</h2>
          <div className={styles.actions}>
            <a href="mailto:bdrgcmz@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className={styles.actionIcon} />
              Email me
            </a>
            <a href="/assets/Bedir-Gocmez-CV.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} className={styles.actionIcon} />
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.linkPanel}>
          <nav className={styles.nav} aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={styles.link}>
                {item}
              </a>
            ))}
          </nav>

          <div className={styles.social}>
            <a
              href="https://github.com/bedirgcmz"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com/in/bedirgocmez"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2026 Bedir Gocmez. Crafted with Next.js.</p>
          <span className='hidden'><VisitorCount /></span>
        </div>
      </div>
    </footer>
  );
}
