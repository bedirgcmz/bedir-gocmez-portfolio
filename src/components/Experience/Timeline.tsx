
import React from "react";
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Timeline: React.FC = () => {
  return (
    <div className="absolute left-0 lg:relative">
        <div className={`relative md:mx-6 ${styles.timelineWrapper}`}>
            <div
                className={`flex flex-col justify-between items-center w-[2.6rem] rounded-full bg-[var(--color-active-darker)] h-full ${styles.timeline}`}
                aria-hidden="true"
            >
                <span className="text-white font-bold">2025</span>
                <span className="text-white font-bold ">2020</span>
                <span className="text-white font-bold">2016</span>
                <span className="text-white font-bold">2011</span>
            </div>

            {/* Arrows */}
            <FontAwesomeIcon icon={faCaretRight} className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow1}`}/>
            <FontAwesomeIcon icon={faCaretRight} className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow2}`}/>
            <FontAwesomeIcon icon={faCaretRight} className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow3}`}/>
            <FontAwesomeIcon icon={faCaretRight} className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow4}`}/>
            <i className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow1}`} />
            <i className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow2}`} />
            <i className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow3}`} />
            <i className={`fa-solid fa-play absolute text-[var(--color-active)] ${styles.arrow} ${styles.arrow4}`} />
        </div>
    </div>
  );
};

export default Timeline;
