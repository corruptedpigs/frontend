import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero2" style={{ backgroundImage: "url('/TRADER-2-faded.png')", backgroundSize: "contain", backgroundPosition: 'left', backgroundRepeat: "no-repeat" }} className='hero'>
      <div className="hero-overlay custom-hero-overlay"></div>
      <div className="hero-content grid grid-cols-1 py-20">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:ml-6 text-neutral-content mx-10">
            <h1 className="mb-5 text-5xl font-bold">Challenge the System.</h1>
            <p className="mb-5 text-2xl">Corrupted Pigs&apos; Online Card Game - Coming Soon. Sharpen your skills and rise to the top.</p>
          </div>
          <div className="lg:w-1/2 lg:ml-6">
            <div className="mockup-browser border bg-slate-300 max-w-xl mx-auto">
              <div className="mockup-browser-toolbar">
                <div className="input text-sm sm:text-base">https://corruptedpigs.com</div>
              </div>
              <div className="flex justify-center px-4 py-6 bg-slate-800">
                <Image src="/game-demo.jpeg" alt="Game demo" height={566} width={900}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
