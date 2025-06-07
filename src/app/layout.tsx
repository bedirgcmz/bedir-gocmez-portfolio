
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: "Bedir Gocmez",
  description: "Bedir Gocmez's frontend portfolio with React, Next.js, and TypeScript. Scoring 98 in both accessibility and performance. Always open to new opportunities in web development."
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = 'dark';

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
        <ThemeProvider serverTheme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
