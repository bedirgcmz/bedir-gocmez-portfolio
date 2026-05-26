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
        I’m open to full-stack product work, React/Next.js projects, app ideas, and teams that care about polished user experience.
      </p>
      <div className={styles.availabilityList} aria-label="Availability details">
        <span><FontAwesomeIcon icon={faLocationDot} className={styles.icon} /> Stockholm based</span>
        <span><FontAwesomeIcon icon={faBolt} className={styles.icon} /> Fast to prototype</span>
        <span><FontAwesomeIcon icon={faCodeBranch} className={styles.icon} /> Product + code mindset</span>
      </div>
      <a href="mailto:bedirgocmez@gmail.com" className={styles.emailLink} aria-label="Send email to Bedir Gocmez">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        bedirgocmez@gmail.com
      </a>
    </div>
  );
}
