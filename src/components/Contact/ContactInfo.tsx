'use client';

import styles from './Contact.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactInfo() {
  return (
    <div className={styles.infoBox}>
      <h2 id="contact-heading" className={styles.heading}>
        Let&rsquo;s Talk
      </h2>
      <p className={`${styles.description} text-gray-600 dark:text-gray-400`}>
        Do you have a project in mind or just want to say hello? I’m always open to new ideas, collaboration, or simply a friendly chat.
      </p>
      <a href="mailto:bedirgocmez@gmail.com" className={styles.emailLink} aria-label="Send email to Bedir Gocmez">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        bedirgocmez@gmail.com
      </a>
    </div>
  );
}
