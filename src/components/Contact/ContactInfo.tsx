'use client';

import styles from './Contact.module.css';
import { faEnvelope, faLocationDot, faBolt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactInfo() {
  return (
    <div className={styles.infoBox}>
      <p className={styles.kicker}>Available for product-minded teams</p>
      <h2 id="contact-heading" className={styles.heading}>
        Let&rsquo;s build something sharp.
      </h2>
      <p className={`${styles.description} text-gray-600 dark:text-gray-400`}>
        I’m open to web and mobile product work with React, Next.js, TypeScript, and React Native, and teams that value accessibility and thoughtful user experience.
      </p>
      <div className={styles.availabilityList} aria-label="Availability details">
        <span><FontAwesomeIcon icon={faLocationDot} className={styles.icon} /> Stockholm based</span>
        <span><FontAwesomeIcon icon={faBolt} className={styles.icon} /> Fast to prototype</span>
        <span><FontAwesomeIcon icon={faCodeBranch} className={styles.icon} /> Product + code mindset</span>
      </div>
      <a href="mailto:bdrgcmz@gmail.com" className={styles.emailLink} aria-label="Send email to Bedir Gocmez">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        bdrgcmz@gmail.com
      </a>
    </div>
  );
}
