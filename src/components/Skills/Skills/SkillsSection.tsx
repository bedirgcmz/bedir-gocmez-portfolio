"use client"
import React from 'react'
import SkillCard from '../SkillsCard/SkillCard';
import Image from 'next/image';
import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const skillGroups = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'AngularJS', 'Vue.js'] },
  { title: 'Backend & Data', skills: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB', 'MySQL', 'CMS'] },
  { title: 'UI & UX', skills: ['Tailwind CSS', 'Material UI', 'HTML', 'CSS', 'Storybook'] },
  { title: 'Testing & Delivery', skills: ['Jest', 'React Testing Library', 'Playwright', 'GitHub Actions', 'Vercel'] },
  { title: 'Tools & Collaboration', skills: ['Git', 'GitHub', 'REST APIs', 'Agile/Scrum', 'Figma'] },
];

  const personalSkills = [
    { url: '/images/personalSkillIcons/adaptability.png', skillName: 'Adaptability', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/communication.png', skillName: 'Communication', padding: 18, progress: 90 },
    { url: '/images/personalSkillIcons/creative.png', skillName: 'Creative Thinking', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/dog-lover.png', skillName: 'Empathy', padding: 22, progress: 90 },
    { url: '/images/personalSkillIcons/fast-learner.png', skillName: 'Fast Learner', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/problem-solving.png', skillName: 'Problem Solving', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/stress-management.png', skillName: 'Stress Management', padding: 18, progress: 90 },
    { url: '/images/personalSkillIcons/team-work.png', skillName: 'Teamwork', padding: 18, progress: 90 },
  ];

  const SkillsSection = () => {
    const personalGroups = [
        [personalSkills[0]],
        [personalSkills[1], personalSkills[2]],
        [personalSkills[3], personalSkills[4]],
        [personalSkills[5], personalSkills[6]],
        [personalSkills[7]],
      ];
    const personalPaddings = [0, 20, 10, 20, 0];
      


  
    return (
      <section className={`mt-12 relative max-w-[1200px] m-auto ${styles.section}`}>
        <div className={styles.technicalGrid} aria-label="Technical skills">
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.technicalCard}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>

            {/* Personal Skills Start*/}
            <div className={`${styles.skillCluster} mt-40`}> 
                    <ConstellationBackdrop variant="secondary" />
                    <AnimatedSkillCircle url="/images/global/skills2.png" alt="Personal Skills" />
                    {personalGroups.map((group, index) => (
                    <div
                        key={index}
                        style={{
                            paddingLeft: `${personalPaddings[index]}%`,
                            paddingRight: `${personalPaddings[index]}%`,
                        }}
                        className={`flex ${index === 0 || index === personalGroups.length-1 ? "justify-center" : "justify-between"} gap-8 items-center mt-16 ${styles.skillRow} ${index === 1 || index === personalGroups.length-2 ? styles.skillsCardContainer : ""}`}
                    >
                        {group.map((item, i) => (
                        <SkillCard
                            key={`${index}-${i}`}
                            url={item.url}
                            skill={item.skillName}
                            progress={item.progress}
                            showCirkle={false}
                        />
                        ))}
                </div>
                ))}
            </div>
        {/* Personal Skills End*/}

      </section>
    );
  };

export default SkillsSection

function ConstellationBackdrop({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  return (
    <div className={`${styles.constellation} ${variant === 'secondary' ? styles.constellationSecondary : ''}`} aria-hidden="true">
      <span className={styles.orbitOne} />
      <span className={styles.orbitTwo} />
      <span className={styles.orbitThree} />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

type AnimatedSkillCircleProps = {
    url: string;
    alt: string;
  };
  
  const AnimatedSkillCircle = ({ url, alt }: AnimatedSkillCircleProps) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  
    return (
        <div
          ref={ref}
          className="absolute top-1/2 left-1/2 w-[23%] sm:w-[30%] max-w-[500px] aspect-square -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <Image
              src={url}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1140px) 60vw, 300px"
              priority
            />
          </motion.div>
        </div>
      );
  };
