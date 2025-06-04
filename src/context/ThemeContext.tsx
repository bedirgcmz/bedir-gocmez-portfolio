
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import { setCookie } from 'cookies-next';

// type Theme = 'light' | 'dark';

// const defaultTheme: Theme = 'dark';
// const storageKey = 'theme-bdr-portfolio';

// const ThemeContext = createContext<{
//   theme: Theme;
//   toggleTheme: () => void;
// } | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>(defaultTheme);

//   const applyTheme = (mode: Theme) => {
//     document.documentElement.classList.toggle('dark', mode === 'dark');
//   };

//   const toggleTheme = () => {
//     const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     localStorage.setItem(storageKey, newTheme);
//     setCookie(storageKey, newTheme, { path: '/' }); 
//     applyTheme(newTheme);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem(storageKey) as Theme | null;
//     const currentTheme: Theme = savedTheme || defaultTheme;
//     setTheme(currentTheme);
//     applyTheme(currentTheme);
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
//   return ctx;
// };


'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';

type Theme = 'light' | 'dark';

const storageKey = 'theme-bdr-portfolio';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | undefined>(undefined);

export const ThemeProvider = ({ 
  children,
  serverTheme
}: { 
  children: React.ReactNode;
  serverTheme: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(serverTheme);

  const applyTheme = (mode: Theme) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
    document.documentElement.setAttribute('data-theme', mode);
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
    setCookie(storageKey, newTheme, { path: '/' });
    applyTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;
    const currentTheme = savedTheme || serverTheme;
    setTheme(currentTheme);
    applyTheme(currentTheme);
  }, [serverTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};