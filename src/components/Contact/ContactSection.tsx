
'use client';

import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.wrapper}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
