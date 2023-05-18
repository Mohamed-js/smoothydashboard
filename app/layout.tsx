import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'SmoothySense',
  description: 'AdminPanel.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
