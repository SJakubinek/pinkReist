import './globals.css';

import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google';
import Alex from 'next/font/local';
import Rockkitt from 'next/font/local';

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
});
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
});
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
});

const alex = Alex({
  src: '../public/AlexBrush-Regular.ttf',
  variable: '--font-alex',
});

const rockkitt = Rockkitt({
  src: '../public/Rokkitt-VariableFont_wght.ttf',
  variable: '--font-rockkitt',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable} ${alex.variable} ${rockkitt.variable}`}
    >
      <body>
        <div style={{ backgroundColor: '#eadbcb' }}>{children}</div>
      </body>
    </html>
  );
}
