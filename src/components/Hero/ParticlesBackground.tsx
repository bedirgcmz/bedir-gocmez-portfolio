'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '@/context/ThemeContext';
import type { ISourceOptions } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  // tsParticles motoru 1 kere yüklenmeli
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // theme değişse de her seferinde aynı base yapı döner
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false, zIndex: -1 },
    background: {
      color: {
        value: theme === 'dark' ? '#004046' : '#ffffff',
      },
    },
    particles: {
      number: {
        value: 150,
        density: { enable: true, area: 800 },
      },
      color: { value: '#33bbc5' },
      links: {
        enable: true,
        color: '#33bbc5',
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: { default: 'bounce' },
      },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.5 },
    },
    detectRetina: true,
  }), [theme]);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}
