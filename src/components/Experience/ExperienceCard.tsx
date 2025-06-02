"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

interface ExperienceCardProps {
  company: string;
  role: string;
  description: string;
  date: string;
  iconClass?: string;
  direction?: "left" | "right";
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  description,
  date,
  iconClass,
  direction = "left",
  delay = 0.3,
}) => {
  const animation = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay, duration: 0.7 },
    },
  };

  return (
    <motion.article
      className={`relative rounded-md shadow-md max-xs:w-[226px] w-[310px] sm:w-[380px] max-w-md bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200  ${styles.card}`}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 160, damping: 7 }}
      aria-label={`${role} at ${company}`}
    >
      <div className="absolute inset-0 hover:scale-105 hover:shadow-lg transition-transform rounded-md z-0" aria-hidden="true" />
      <header className="bg-[var(--color-active)] text-white rounded-t-md px-4 py-2 font-semibold flex items-center gap-2">
        {iconClass && <i className={`${iconClass}`} aria-hidden="true" />}
        <span>{company}</span>
      </header>
      <div className="px-4 py-3 bg-white text-gray-500 h-[135px]">
        <h3 className="font-bold text-lg flex items-center gap-2">{role}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
      <footer className="bg-[var(--color-hover)] text-white text-sm py-1 px-2 text-center rounded-b-md font-semibold">
        {date}
      </footer>

    
    </motion.article>
  );
};

export default ExperienceCard;
