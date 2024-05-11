"use client";

import { useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Hero from "./components/homepage/hero"
import NFCBanner from "./components/homepage/nfc_banner"
import Footer from "./components/homepage/footer"

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Initialize Google Analytics only in production
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero/>
      <NFCBanner/>
      <Footer/>
    </main>
  );
}
