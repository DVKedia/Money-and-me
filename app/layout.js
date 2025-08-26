
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';

export const metadata = {
  title: "Money & Me - Wealth Management & Financial Planning",
  description: "Expert wealth management, investment advisory, and financial planning services. Build your secure financial future with personalized strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
