// import InstituitionsRollbar from './institutions_rollbar';
"use client";

import { motion } from 'framer-motion';
import Image, { getImageProps } from 'next/image';
import React, { useState } from 'react';
import Navbar from "./navbar";
import CtaGoogleAnalytics from "../cta_google_analytics";

function getBackgroundImage(sectionName, imageData) {
  if (sectionName in imageData) {
    return `url('${imageData[sectionName]}')`;  // Format background image URL
  } else {
    throw new Error(`Background image not found for section: ${sectionName}`);
  }
}

const Hero = () => {
  const imageData = {
    hero: '/background-3.jpeg',
    footer: '/background-2.jpeg',
  };

  const heroBackgroundImage = getBackgroundImage('hero', imageData);
  const hero2BackgroundImage = getBackgroundImage('footer', imageData);

  return (
    <>
      <section id="hero1" style={{ backgroundImage: heroBackgroundImage, backgroundSize: "cover" }}>
        <Navbar />

        <div className='hero'>

          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content grid grid-cols-1 container py-20">
            <div className="md:flex md:justify-between">
              <div className="md:w-1/2 md:ml-6 text-neutral-content">
                <h1 className="mb-5 text-5xl font-bold">Power Up for Good</h1>
                <p className="mb-5 text-2xl"> Corrupted Pigs&apos; NFTs fuel social causes. Play. Earn. Make a Difference.</p>
                <CtaGoogleAnalytics
                  buttonText="Get your T-shirt with the pigs"
                  buttonClass="btn btn-warning"
                  url="//corruptedpigs.store"
                  ctaLabel="cta-merch-hero"
                />
              </div>
              <motion.div
                className="pt-16 md:pt-0 md:w-1/2 md:pl-20"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }} // One full rotation
                duration={2} // Adjust duration (in seconds)
                ease="easeInOut" // Adjust easing function
                style={{ display: 'flex', /* additional styles */ }}
              >
                <Image src="/carta1.png" alt="Pig card" height={400} width={400} className='mx-auto' />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="hero2" style={{ backgroundImage: hero2BackgroundImage, backgroundSize: "cover" }} className='hero'>
        <div className="hero-overlay bg-opacity-70"></div>
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
    </>
  )
}

export default Hero;
