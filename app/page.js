import InstitutionsMarquee from './components/homepage/institutions_marquee';
import Hero from "./components/homepage/hero"
import NFCBanner from "./components/homepage/nfc_banner"
import Associations from "./components/homepage/associations"
import Accordion from "./components/homepage/accordion"
import Footer from "./components/homepage/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <InstitutionsMarquee/>
      <Hero/>
      <Associations/>
      <NFCBanner/>
      <Accordion/>
      <Footer/>
    </main>
  );
}
