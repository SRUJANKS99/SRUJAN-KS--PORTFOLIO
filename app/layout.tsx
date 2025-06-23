import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Srujan K S - Java Full Stack Developer',
  description: 'Portfolio of Srujan K S - Java Full Stack Developer Intern specializing in Spring Boot, React, and modern web technologies.',
  keywords: 'Java, Full Stack Developer, Spring Boot, React, Web Development, Portfolio',
  authors: [{ name: 'Srujan K S' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}