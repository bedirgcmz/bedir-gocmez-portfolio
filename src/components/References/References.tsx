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
      <h2 id="references-title text-2xl" className={styles.sectionTitle}>What People Say</h2>
      <p className={styles.subtitle}>Reliable, adaptable, and valued — here&#39;s what others think.</p>

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
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
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
