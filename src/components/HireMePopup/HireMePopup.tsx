
'use client';

import { useEffect, useState } from "react";
import styles from './HireMePopup.module.css';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const HireMePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const subject = encodeURIComponent('I would like to hire you!');
  const body = encodeURIComponent(
    `Hi Bedir,\n\nI have visited your portfolio and found your work very interesting. I'd like to get in touch with you.`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const projects = [
    {
      img: "simpletask.jpg",
      href: "https://play.google.com/store/apps/details?id=com.bgSweden.simpletask",
      alt: "Sky Tech Education Academy project"
    },
    {
      img: "sky.jpg",
      href: "https://skyeducationacademy.com/",
      alt: "Sky Tech Education Academy project"
    },
    {
        img: "portfolio.jpg",
        href: "https://bedirgocmez.com/",
        alt: "Meals application project"
      },
    {
      img: "rosee.jpg",
      href: "https://www.rosetravel.co.uk/",
      alt: "Rose Taxi project"
    },
    {
      img: "parking.jpg",
      href: "https://parking-time-next.vercel.app/",
      alt: "Meals application project"
    },
  ];

  if (!isVisible) return null;

  return (
    <div 
      className={styles.popupBackground} 
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-me-heading"
    >
      <div className={styles.animation}>
        <div 
          className={styles.popupContainer} 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className={styles.closeButton}
            onClick={closePopup}
            aria-label="Close popup"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                className={styles.hireMeBgImg} 
                src={"/images/hiremebg2.png" }
                alt="Hire me background"
            />
        
          <div className={styles.popupContent}>
            <h2 id="hire-me-heading" className="sr-only">Hire Me</h2>
            <a 
              href={`mailto:bedirgocmez@gmail.com?subject=${subject}&body=${body}`}
              className={styles.hireMeButton}
              aria-label="Send email to hire me"
            >
                <Image 
                className={styles.hireMeButtonImg} 
                src={"/images/button.png"} 
                alt="Hire me button" 
                width={80}
                height={30}
                />
            </a>
          </div>
          
          <div className={styles.projects}>
            {projects.map((item, index) => (
              <ProjectCard 
                key={index}
                img={item.img}
                href={item.href}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMePopup;