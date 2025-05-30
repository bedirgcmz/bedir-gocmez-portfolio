'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true); // avoid hydration mismatch
  }, []);

  if (!mounted) return (
    <div
      aria-hidden="true"
      className="w-14 h-8 rounded-full p-1 bg-gray-300 flex items-center transition-opacity duration-300 animate-pulse"
    >
      <div className="w-6 h-6 bg-white rounded-full shadow-md" />
    </div>
  );

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
        ${isDark ? 'bg-[#33bbc5]' : 'bg-gray-300'}
      `}
    >
      <div
        className={`
          w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm
          ${isDark ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {isDark ? '🌙' : '🌞'}
      </div>
    </button>
  );
}
