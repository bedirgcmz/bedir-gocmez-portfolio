'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const navItems = ['About', 'Skills', 'Projects', 'Experiences', 'Educations', 'Contact'];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className='flex items-center justify-around gap-6'>
          {/* Left: Nav Links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={styles.link}>
                {item}
              </a>
            ))}
          </nav>

          {/* Center: Social Icons */}
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

        {/* Right: Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2025 Bedir Gocmez. Crafted with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}
