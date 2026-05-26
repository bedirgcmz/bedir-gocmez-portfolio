'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReferenceCard from './ReferenceCard';
import styles from './References.module.css';

type Reference = {
  name: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
};

export default function References() {
  const [references, setReferences] = useState<Reference[] | null>(null);

  useEffect(() => {
    fetch('/data/references.json')
      .then(res => res.json())
      .then(data => setReferences(data))
      .catch(err => console.error('Reference data error:', err));
  }, []);

  return (
    <section className={styles.section} aria-labelledby="references-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Trusted by teams</p>
        <h2 id="references-title" className={styles.sectionTitle}>What People Say</h2>
        <p className={styles.subtitle}>A few signals from people I have learned with, built with, and shipped alongside.</p>
      </div>

      <div className={styles.proofStrip} aria-label="Professional proof points">
        <span>Fast learner</span>
        <span>Solution-oriented</span>
        <span>Clear communication</span>
      </div>

      {!references ? (
        <div className={styles.loadingWrapper}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.loadingCard} />
          ))}
        </div>
      ) : ( 
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            769: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          loop
          autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation
          className={styles.slider}
          style={{ paddingBottom: '40px', padding: '20px' }}
        >
          {references.map((ref, i) => (
            <SwiperSlide key={i}>
              <ReferenceCard {...ref} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
