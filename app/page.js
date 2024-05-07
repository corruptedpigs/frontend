import Image from "next/image";
import Hero from "./components/homepage/hero"
import NFCBanner from "./components/homepage/nfc_banner"
import Footer from "./components/homepage/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <NFCBanner/>
      <Footer/>
    </main>
  );
}
