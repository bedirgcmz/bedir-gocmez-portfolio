'use client';

import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';

type Props = {
  words: string[];
  loop?: boolean;
};

export default function TypeText({ words, loop = true }: Props) {
  return (
    <span className="text-[var(--color-hover)]">
      <Typewriter
        words={words}
        loop={loop}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={60}
        delaySpeed={1500}
      />
    </span>
  );
}
