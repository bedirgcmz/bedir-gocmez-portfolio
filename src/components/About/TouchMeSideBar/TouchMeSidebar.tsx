import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './TouchMeSidebar.module.css';

const socials = [
  {
    icon: faGithub,
    url: 'https://github.com/bedirgcmz',
    label: 'GitHub',
  },
  {
    icon: faLinkedin,
    url: 'https://linkedin.com/in/bedirgocmez',
    label: 'LinkedIn',
  },
];

export default function TouchMeSidebar() {
  return (
    <div className={` md:flex px-4 md:px-0 flex-col items-center md:me-[60px] lg:me-[100px] text-[var(--color-active)] dark:text-[var(--color-active-darker)] ${styles.sidebar}`}>
      <span className={styles.text}>Touch</span>
      <span className={`${styles.line} bg-[var(--color-active)] dark:bg-[var(--color-active-darker)]`}></span>
      <span className={`${styles.circle} bg-[var(--color-active)] dark:bg-[var(--color-active-darker)]`}></span>

      {socials.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={styles.icon}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}

      <span className={`${styles.circle} bg-[var(--color-active)] dark:bg-[var(--color-active-darker)]`}></span>
      <span className={`${styles.line} bg-[var(--color-active)] dark:bg-[var(--color-active-darker)]`}></span>
      <span className={styles.text}>me</span>
    </div>
  );
}
