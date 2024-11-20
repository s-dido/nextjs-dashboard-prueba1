import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialliased`}>{children}</body>
    </html>
  );
}
