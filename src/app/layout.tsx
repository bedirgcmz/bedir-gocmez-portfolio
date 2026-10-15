
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: "Bedir Gocmez",
  description: "Bedir Gocmez, Full-Stack Developer in Stockholm. Production web and mobile applications with React, Next.js, TypeScript, React Native, and accessible UI."
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = 'dark';

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${theme}`}
      data-theme={theme}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme-bdr-portfolio');
                  var mode = theme === 'light' ? 'light' : 'dark';
                  document.documentElement.classList.add(mode);
                  document.documentElement.setAttribute('data-theme', mode);
                } catch(e) {}
              })();
            `,
          }}
        ></script>
      </head>
      <body className='pt-[70px]'>
        <div className="ambient-glow" aria-hidden="true" />
        <ThemeProvider serverTheme={theme}>
          <ScrollProgress />
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
