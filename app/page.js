"use client";

import { useEffect } from 'react';
import Hero from "./components/homepage/hero"
import NFCBanner from "./components/homepage/nfc_banner"
import Footer from "./components/homepage/footer"

export default function Home() {
  useEffect(() => {
    console.error("The NODE_ENV is " + process.env.NODE_ENV);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero/>
      <NFCBanner/>
      <Footer/>
    </main>
  );
}
