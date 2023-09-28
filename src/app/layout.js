import { Roboto } from 'next/font/google';
import Background from './components/Background';
import './globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["300", "500", "900"],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
