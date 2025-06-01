"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';

type SkillCardProps = {
  url: string;
  skill: string;
  showCirkle: boolean
};

export default function SkillCard({ url, skill, showCirkle = true }: SkillCardProps) {

  return (
    <motion.div
      className={`relative flex items-center gap-1 md:gap-2 md:w-[220px] rounded-full border-2 border-[#1c8288]  md:px-4 md:py-2 text-white ${styles.cardGlow} ${styles.skillCard}`}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 7 }}
      role="group"
      aria-label={`Skill: ${skill}`}
    >
      <Image src={url} alt={skill} width={28} height={28} className='rounded-full'/>
      <div className="flex flex-col w-[90%] mt-[-5px]">
        <div className="flex items-center gap-1">
         { showCirkle && <span className="w-3 h-3 bg-[var(--color-active)] dark:bg-[var(--color-active-darker)] rounded-full"></span> }
          <span className={`text-sm font-semibold text-[#b95e00] dark:text-white ${showCirkle ? "" :"text-[10px] md:text-[13px] font-bold" }`}>{skill}</span>
        </div>
        <div className="h-3 flex w-[90%] items-center justify-strart px-1 bg-[#1c8288] dark:bg-[var(--color-hover)] rounded-full">
          <div
            className="h-[55%] w-[90%] bg-[#e1e1e1] dark:bg-[var(--color-active)] rounded-full"
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
