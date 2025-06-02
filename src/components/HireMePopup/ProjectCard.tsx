'use client';

import Image from 'next/image';
import styles from './HireMePopup.module.css';

type ProjectCardProps = {
  img: string;
  href: string;
  alt: string;
};

const ProjectCard = ({ img, href, alt }: ProjectCardProps) => {
  return (
    <a 
      target="_blank" 
      href={href} 
      rel="noopener noreferrer"
      className={styles.projectLink}
      aria-label={`View ${alt} project`}
    >
      <Image 
        className={styles.projectImg} 
        src={`/images/proudProjects/${img}`} 
        alt={alt}
        width={140}
        height={100}
      />
    </a>
  );
};

export default ProjectCard;