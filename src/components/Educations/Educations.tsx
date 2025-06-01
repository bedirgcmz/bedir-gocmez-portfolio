'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Educations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLaptopCode,
  faPersonChalkboard,
  faPersonWalkingArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  faCode,
  faLaptopCode,
  faPersonChalkboard,
  faPersonWalkingArrowRight,
};

type EducationItem = {
  id: number;
  icon: keyof typeof iconMap;
  title: string;
  company: string;
  description: string;
  date: string;
};

export default function Educations() {
  const [data, setData] = useState<EducationItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/educations.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const tiltVariants = {
    initial: {
      rotateX: -12,
      rotateY: 8,
      rotateZ: -4,
      scale: 1,
    },
    hover: {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1.02,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className={styles.wrapper} aria-labelledby="edu-heading">
      {loading ? (
        <div className={styles.loaderWrapper}>
          {[1, 2, 3, 4].map((n) => (
            // <div className='flex flex-col max-w-[1200px] m-auto md:flex-row flex-wrap gap-6 md:gap-8 items-center justify-center;'>
                <div key={n} className={styles.skeletonCard}></div>
            // </div> 
          ))}
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {data?.map((edu, index) => (
            <motion.div
              key={edu.id}
              aria-label={`Education at ${edu.company}`}
            //   initial={{ opacity: 0, x: -40, scale: 0.95 }}
            //   whileInView={{ opacity: 1, x: 0, scale: 1 }}
            //   transition={{ duration: 0.6, delay: index * 0.1 }}
            variants={tiltVariants}
            initial="initial"
            animate="float"
            whileHover="hover"
            className={styles.card}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={iconMap[edu.icon]} />
              </div>
              <div className={styles.iconBoxLeft}>
                {4 - index}
              </div>
              <div className={styles.content}>
                <div>
                    <h3 className={styles.title}>{edu.title}</h3>
                    <p className={styles.company}>{edu.company}</p>
                    <p className={styles.desc}>{edu.description}</p>
                </div>
                <p className={styles.date}>{edu.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
