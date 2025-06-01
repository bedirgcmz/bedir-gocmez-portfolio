'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from '../ThemeToggle';
import Download from '../Download/Download';
import { renderNavLinks } from './renderNavLinks';

const navItems = [
  'About',
  'Skills',
  'Projects',
  'Experiences',
  'Educations',
  'Contact'
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveHash(`#${id}`);
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
  
    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });
  
    return () => observer.disconnect();
  }, []);
  
  

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-300 max-w-[100vw] ${
        theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-black'
      } ${styles.header}`}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/profile-logo.jpeg"
            alt="Bedir Gocmez"
            width={40}
            height={40}
            className={styles.avatar}
          />
          <div>
            <h1 className={styles.name}>Bedir Gocmez</h1>
            <p className={`${styles.title} dark:text-[#ff8000]`}>Frontend Developer</p>
          </div>
        {/* Desktop Nav */}
        <nav className={`hidden lg:flex ${styles.nav} ms-6`}>
          <ul className="flex gap-4">{renderNavLinks({ navItems, activeHash })}</ul>
        </nav>
        </div>


        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className='hidden sm:inline-block'><Download /></span>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`${styles.menuButton} ${isMenuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.bar} dark:bg-white`}></span>
            <span className={`${styles.bar} dark:bg-white`}></span>
            <span className={`${styles.bar} dark:bg-white`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`md:hidden  ${styles.overlay}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-2/5 z-50 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-black'} shadow-lg p-6`}
      >
        <button onClick={() => setIsMenuOpen(false)} className='absolute top-[44px] left-[25px]' aria-label='Close Navbar'>
            <FontAwesomeIcon icon={faCircleXmark} className='h-[27px]'/>
        </button>
        <ul className={styles.nav}>{renderNavLinks({ navItems, activeHash, onClick: handleLinkClick })}
        <li className='mt-6'><Download /></li>
        </ul>
      </nav>
    </header>
  );
}
