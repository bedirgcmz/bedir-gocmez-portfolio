'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Educations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCode,
  faLaptopCode,
  faPersonChalkboard,
  faPersonWalkingArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Education, EducationIconKey } from '@/types/education';

const iconMap: Record<EducationIconKey, IconDefinition> = {
  faCode,
  faLaptopCode,
  faPersonChalkboard,
  faPersonWalkingArrowRight,
};

export default function Educations() {
  const [data, setData] = useState<Education[] | null>(null);
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
                <div key={n} className={styles.skeletonCard}></div>
          ))}
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {data?.map((edu, index) => (
            <motion.div
              key={edu.id}
              aria-label={`Education at ${edu.company}`}
            variants={tiltVariants}
            initial="initial"
            animate="float"
            whileHover="hover"
            className={styles.card}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={iconMap[edu.icon] ?? faCode} />
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
