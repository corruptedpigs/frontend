import Image from "next/image";
import Navbar from "./components/homepage/navbar"
import Hero from "./components/homepage/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
    </main>
  );
}
