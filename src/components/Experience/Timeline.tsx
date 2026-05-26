'use client';

import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const milestones = ["2025", "2020", "2016", "2011"];

const Timeline: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const fill = fillRef.current;
    if (!wrapper || !fill) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 68%",
            end: "bottom 42%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "[data-year]",
        { opacity: 0.45, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 72%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );
    }, wrapper);

    return () => context.revert();
  }, []);

  return (
    <div className="absolute left-0 lg:relative">
      <div ref={wrapperRef} className={`relative md:mx-6 ${styles.timelineWrapper}`}>
        <div className={styles.timelineTrack} aria-hidden="true">
          <div ref={fillRef} className={styles.timelineFill} />
          {milestones.map((year) => (
            <span key={year} data-year className={styles.yearPill}>
              {year}
            </span>
          ))}
        </div>

        <FontAwesomeIcon icon={faCaretRight} className={`absolute ${styles.arrow} ${styles.arrow1}`} />
        <FontAwesomeIcon icon={faCaretRight} className={`absolute ${styles.arrow} ${styles.arrow2}`} />
        <FontAwesomeIcon icon={faCaretRight} className={`absolute ${styles.arrow} ${styles.arrow3}`} />
        <FontAwesomeIcon icon={faCaretRight} className={`absolute ${styles.arrow} ${styles.arrow4}`} />
      </div>
    </div>
  );
};

export default Timeline;
