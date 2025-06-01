'use client';

import styles from './SectionTitle.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SectionTitleProps = {
  text: string;
  icon: IconDefinition;
};

export default function SectionTitle({ text, icon }: SectionTitleProps) {

  return (
    <h1 className={styles.title}>
      {text}
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </h1>
  );
}
