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
      className="w-14 h-6 rounded-full p-1 bg-gray-300 flex items-center transition-opacity duration-300 animate-pulse"
    >
      <div className="w-4 h-4 bg-white rounded-full shadow-md" />
    </div>
  );

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        w-14 h-[30px] flex items-center rounded-full p-1 transition-colors duration-300
        ${isDark ? 'border border-[#33bbc5]' : 'border border-gray-300'}
      `}
    >
      <div
        className={`
          w-[22px] h-[22px] bg-[#33bbc5] rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm hover:scale-[0.9]
          ${isDark ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {isDark ? '🌙' : '🌞'}
      </div>
    </button>
  );
}
