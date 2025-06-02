"use client"
import React from 'react'
import SkillCard from '../SkillsCard/SkillCard';
import Image from 'next/image';
import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const skills = [
    { url: '/images/icons/js.png', skillName: 'JavaScript', padding: 18, progress: 90 },
    { url: '/images/icons/nextjs.png', skillName: 'Next.js', padding: 22, progress: 90 },
    { url: '/images/icons/typescript.png', skillName: 'TypeScript', padding: 20, progress: 90 },
    { url: '/images/icons/html.png', skillName: 'HTML5', padding: 16, progress: 95 },
    { url: '/images/icons/css.png', skillName: 'CSS3', padding: 16, progress: 95 },
    { url: '/images/icons/tailwind.webp', skillName: 'Tailwind', padding: 24, progress: 95 },
    { url: '/images/icons/bootstrap.png', skillName: 'Bootstrap', padding: 18, progress: 95 },
    { url: '/images/icons/react.png', skillName: 'React', padding: 20, progress: 95 },
    { url: '/images/icons/figma.png', skillName: 'Figma', padding: 18, progress: 75 },
    { url: '/images/icons/git.png', skillName: 'Git - Github', padding: 18, progress: 90 },
    { url: '/images/icons/mysql.png', skillName: 'MySQL', padding: 20, progress: 60 },
    { url: '/images/icons/nodejs.png', skillName: 'Node.js', padding: 16, progress: 80 },
    { url: '/images/icons/expressjs.png', skillName: 'ExpressJs', padding: 22, progress: 40 },
    { url: '/images/icons/mongodb.png', skillName: 'MongoDB', padding: 20, progress: 40 },
    { url: '/images/icons/docker.png', skillName: 'Docker', padding: 22, progress: 50 },
    { url: '/images/icons/postman.png', skillName: 'Postman', padding: 20, progress: 90 },
  ];

  const personalSkills = [
    { url: '/images/personalSkillIcons/adaptability.png', skillName: 'Adaptability', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/communication.png', skillName: 'Communication', padding: 18, progress: 90 },
    { url: '/images/personalSkillIcons/creative.png', skillName: 'Creative Thinking', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/dog-lover.png', skillName: 'Dog Lover 🐶', padding: 22, progress: 90 },
    { url: '/images/personalSkillIcons/fast-learner.png', skillName: 'Fast Learner', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/problem-solving.png', skillName: 'Problem Solving', padding: 20, progress: 90 },
    { url: '/images/personalSkillIcons/stress-management.png', skillName: 'Stress Management', padding: 18, progress: 90 },
    { url: '/images/personalSkillIcons/team-work.png', skillName: 'Teamwork', padding: 18, progress: 90 },
  ];

  const SkillsSection = () => {
    const profesionalGroups = [
      [skills[0]],
      [skills[1], skills[2]],
      [skills[3], skills[4]],
      [skills[5], skills[6]],
      [skills[7], skills[8]],
      [skills[9], skills[10]],
      [skills[11], skills[12]],
      [skills[13], skills[14]],
      [skills[15]],
    ];
    const profesionalPaddings = [0, 20, 8, 6, 4, 6, 8, 20, 0];


    const personalGroups = [
        [personalSkills[0]],
        [personalSkills[1], personalSkills[2]],
        [personalSkills[3], personalSkills[4]],
        [personalSkills[5], personalSkills[6]],
        [personalSkills[7]],
      ];
    const personalPaddings = [0, 20, 10, 20, 0];
      


  
    return (
      <section className="mt-12 relative max-w-[1200px] m-auto">
          {/* Profesional Skills Start*/}
        <div className='relative'>
            <AnimatedSkillCircle
                url="/images/skills1.png"
                alt="Professional Skills"
            />
            {profesionalGroups.map((group, index) => (
            <div
                key={index}
                style={{
                    paddingLeft: `${profesionalPaddings[index]}%`,
                    paddingRight: `${profesionalPaddings[index]}%`,
                }}
                className={`flex ${index === 0 || index === profesionalGroups.length-1 ? "justify-center" : "justify-between"} gap-8 items-center mt-6 ${index === 1 || index === profesionalGroups.length-2 ? styles.skillsCardContainer : ""}`}
            >
                {group.map((item, i) => (
                <SkillCard
                    key={`${index}-${i}`}
                    url={item.url}
                    skill={item.skillName}
                    progress={item.progress}
                    showCirkle={true}
                />
                ))}
            </div>
            ))}
            </div>
            {/* Profesional Skills End*/}

            {/* Personal Skills Start*/}
            <div className='relative mt-40'> 
                    <AnimatedSkillCircle url="/images/skills2.png" alt="Personal Skills" />
                    {personalGroups.map((group, index) => (
                    <div
                        key={index}
                        style={{
                            paddingLeft: `${personalPaddings[index]}%`,
                            paddingRight: `${personalPaddings[index]}%`,
                        }}
                        className={`flex ${index === 0 || index === personalGroups.length-1 ? "justify-center" : "justify-between"} gap-8 items-center mt-16 ${index === 1 || index === personalGroups.length-2 ? styles.skillsCardContainer : ""}`}
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