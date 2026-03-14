import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Studio',
  description: 'Built with Ghyst — powered by AI agents',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
