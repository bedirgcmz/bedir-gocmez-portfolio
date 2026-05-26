'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';
import styles from './DeveloperShowcase.module.css';

const codeLines = [
  { token: 'const', text: ' developer = {' },
  { token: 'role', text: "  role: 'Full-Stack Developer'," },
  { token: 'stack', text: "  stack: ['React', 'Next.js', 'TypeScript', 'Node.js']," },
  { token: 'focus', text: "  focus: 'Polished products, end to end'," },
  { token: 'ship', text: '  ship: () => buildForUsers(),' },
  { token: 'end', text: '};' },
];

const badges = ['React', 'Next.js', 'TypeScript', 'Node.js', 'APIs', 'A11y'];

export default function DeveloperShowcase() {
  const { theme } = useTheme();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-layer]',
        { opacity: 0, y: 28, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        }
      );

      gsap.to('[data-float]', {
        y: -12,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });
    }, root);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(root, {
        '--tilt-x': `${y * -8}deg`,
        '--tilt-y': `${x * 10}deg`,
        '--glow-x': `${50 + x * 28}%`,
        '--glow-y': `${50 + y * 28}%`,
        duration: 0.45,
        ease: 'power2.out',
      });
    };

    root.addEventListener('pointermove', handlePointerMove);

    return () => {
      root.removeEventListener('pointermove', handlePointerMove);
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.stage} aria-label="Developer showcase animation">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.orbitSecondary} aria-hidden="true" />

      <div className={styles.codePanel} data-hero-layer data-float>
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
          <p>portfolio.tsx</p>
        </div>
        <div className={styles.editor}>
          {codeLines.map((line, index) => (
            <p key={line.token}>
              <span className={styles.lineNumber}>{index + 1}</span>
              <span className={styles.codeText}>{line.text}</span>
            </p>
          ))}
        </div>
      </div>

      <div className={styles.profilePanel} data-hero-layer>
        <div className={styles.imageShell}>
          <Image
            src={theme === 'dark' ? '/images/global/about-img.png' : '/images/global/about-img-light.png'}
            alt="Bedir Gocmez Portrait"
            width={380}
            height={420}
            priority
            className={styles.portrait}
          />
        </div>
        <div className={styles.statusCard}>
          <span className={styles.statusDot} />
          <div>
            <p>Available for product work</p>
            <strong>Stockholm based</strong>
          </div>
        </div>
      </div>

      <div className={styles.badgeCloud} data-hero-layer>
        {badges.map((badge, index) => (
          <span key={badge} data-float style={{ animationDelay: `${index * 0.12}s` }}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
