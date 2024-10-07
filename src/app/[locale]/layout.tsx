import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButtons from "@/components/FloatingButton/WhatsAppButtons";
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurelyServices | Professional Cleaning Services in Dubai",
  description: "Top-rated cleaning services in Dubai. PurelyServices offers expert home, office, car, and deep cleaning with easy online booking and secure payments.",
  keywords: "cleaning services Dubai, professional cleaning, home cleaning, office cleaning, deep cleaning, car cleaning, sofa cleaning, Dubai cleaning company, PurelyServices",
  robots: "index, follow",
  openGraph: {
    title: "PurelyServices | Professional Cleaning Services in Dubai",
    description: "Expert cleaning services for homes, offices, and vehicles in Dubai. Book online today with PurelyServices!",
    url: "https://purelycleaning.me/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurelyServices | Professional Cleaning Services in Dubai",
    description: "Best-rated cleaning services in Dubai with easy online booking. Book with PurelyServices today!",
  },
  alternates: {
    canonical: "https://purelycleaning.me/",
    languages: {
      'en': 'https://purelycleaning.me/en',
      'ar-AE': 'https://purelycleaning.me/ar-AE'
    }
  }
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale:string }
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <WhatsAppButtons/>
        {children}
      </body>
    </html>
  );
}
