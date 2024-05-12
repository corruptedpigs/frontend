import Hero from "./components/homepage/hero"
import NFCBanner from "./components/homepage/nfc_banner"
import Accordion from "./components/homepage/accordion"
import Footer from "./components/homepage/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <NFCBanner/>
      <Accordion/>
      <Footer/>
    </main>
  );
}
