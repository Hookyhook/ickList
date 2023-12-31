import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar } from '@components';
import { NewIckButton } from '@components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ick List',
  description: 'Ick List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        {children}
        <NewIckButton></NewIckButton>
      </body>
    </html>
  );
}
