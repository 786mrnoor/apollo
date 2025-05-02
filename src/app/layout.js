import "./globals.css";
import { IBM_Plex_Sans, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],    // required
  weight: ['400', '500', '600', '700'], // which font weights you want
  style: ['normal', 'italic'],          // optional
  variable: '--inter-font',
  fallback: ['sans-serif']
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],    // required
  weight: ['400', '500', '600', '700'], // which font weights you want
  style: ['normal', 'italic'],          // optional
  variable: '--ibm-plex-font',
  fallback: ['sans-serif']
});


export const metadata = {
  title: 'Doctors Listing | Apollo Clone',
  description: 'Find the best doctors by specialization, location, experience and fees.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable + ' ' + ibmPlexSans.variable}>
        {children}
      </body>
    </html>
  );
}
