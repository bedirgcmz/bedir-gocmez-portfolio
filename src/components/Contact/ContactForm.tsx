'use client';

import { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
        //          service id        template id         obje         public id
        emailjs.sendForm("service_w21zl4c", "template_4y8tcvh", formRef.current, "m2Y_XycLwC6X2Pz8M")
        .then(() => {
            toast.success("Message sent successfully!", { position: "bottom-right" });
            setIsSent(true);
            formRef.current?.reset();
            setTimeout(() => setIsSent(false), 4000);
        })
        .catch((error) => {
            toast.error("Failed to send message.", { position: "bottom-right" });
            console.error('EmailJS Error:', error);
        });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className={styles.form}
      aria-label="Contact form"
    >
      <div className={styles.inputGroup}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder='e.g: John Doe' className="placeholder:text-sm" required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder='e.g. john.doe@gmail.com' className="placeholder:text-sm" required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} placeholder='Your message..' className="placeholder:text-sm" required />
      </div>

      <motion.button
        type="submit"
        className={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Send message"
      >
        {isSent ? 'Sent ✔' : 'Send Message'}
      </motion.button>
      <ToastContainer />
    </form>
  );
}
