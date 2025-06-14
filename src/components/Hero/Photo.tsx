'use client';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { useTheme } from '@/context/ThemeContext';

export default function Photo() {
  const { theme } = useTheme();

  return (
      <div
        className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-95 mt-[-100px] md:mt-0 ${
          styles.photoWrapper
        }`}
      >
        <Image
          src={theme === "dark" ? "/images/global/about-img.png": "/images/global/about-img-light.png"}
          alt="Bedir Gocmez Portrait"
          width={400}
          height={400}
          className={`object-cover w-full h-full ${styles.heroImg}`}
          priority
        />
      </div>
  );
}
