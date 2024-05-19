import InstitutionsMarquee from './components/homepage/institutions_marquee';
import Navbar from "./components/homepage/navbar";
import Hero from "./components/homepage/hero"
import Hero2 from "./components/homepage/hero2"
import NFCBanner from "./components/homepage/nfc_banner"
import Associations from "./components/homepage/associations"
import Accordion from "./components/homepage/accordion"
import Roadmap from "./components/homepage/roadmap"
import Footer from "./components/homepage/footer"

function getBackgroundImage(image_path) {
    return `url('${imageData[sectionName]}')`;  // Format background image URL
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <InstitutionsMarquee/>
      <div style={{ backgroundImage: "url('/background-3.png')", backgroundSize: "cover", backgroundPosition: 'center' }}>
        <Navbar />
        <Hero/>
      </div>
      <Hero2/>
      <Associations/>
      <NFCBanner/>
      <Roadmap/>
      <Accordion/>
      <hr className="bg-purple glow"/>
      <Footer/>
    </main>
  );
}
