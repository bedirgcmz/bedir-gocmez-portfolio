'use client';
import Image from 'next/image';
import styles from './About.module.css';
import { useTheme } from '@/context/ThemeContext';

export default function Photo() {
  const { theme, toggleTheme } = useTheme();

  return (
      <div
        className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
          styles.photoWrapper
        }`}
      >
        <Image
          src={theme === "dark" ? "/images/about-img.png": "/images/about-img-light.png"}
          alt="Bedir Gocmez Portrait"
          width={400}
          height={400}
          className={`object-cover w-full h-full ${styles.aboutImg}`}
          priority
        />
      </div>
  );
}
