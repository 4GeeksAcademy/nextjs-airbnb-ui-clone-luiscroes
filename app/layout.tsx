import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb clone · Alquileres vacacionales',
  description: 'Clon de la interfaz de Airbnb construido con Next.js, React, TypeScript y Tailwind CSS.',
};

const RootLayout = ({ children }: LayoutProps<'/'>) => (
  <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col bg-white text-neutral-900">{children}</body>
  </html>
);

export default RootLayout;
