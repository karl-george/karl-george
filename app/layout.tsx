import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karl George Portfolio',
  description: 'Karl George Portfolio 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} text-textMain`}>{children}</body>
    </html>
  );
}
