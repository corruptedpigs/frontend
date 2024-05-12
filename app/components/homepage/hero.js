// import InstituitionsRollbar from './institutions_rollbar';
"use client";

import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image, { getImageProps } from 'next/image';
import React, { useState } from 'react';
import { config } from "react-spring";
import Navbar from "./navbar";
import CtaGoogleAnalytics from "../cta_google_analytics";
import dynamic from 'next/dynamic';

const Carousel = dynamic(
  () => import('react-spring-3d-carousel'),
  { ssr: false }
);

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

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: <Image src="/carta1.png" alt="Pig card1" height={600} width={600}/>
    },
    {
      key: uuidv4(),
      content: <Image src="/carta2.png" alt="Pig card2" height={600} width={600}/>
    },
    {
      key: uuidv4(),
      content: <Image src="/carta3.png" alt="Pig card3" height={600} width={600}/>
    },
    {
      key: uuidv4(),
      content: <Image src="/carta1.png" alt="Pig card1" height={600} width={600}/>
    },
    {
      key: uuidv4(),
      content: <Image src="/carta2.png" alt="Pig card2" height={600} width={600}/>
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2500); // Change 1000 to adjust rotation interval (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
  }, [slides.length]);

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
                  buttonText="Get your t-shirt and support the cause"
                  buttonClass="btn btn-warning hover:animate-[wiggle_1s_ease-in-out_infinite]"
                  url="//corruptedpigs.store"
                  ctaLabel="cta-merch-hero"
                />
              </div>

              <div style={{ height: "500px", width: "100%" }}>
                  <Carousel slides={slides} goToSlide={activeSlide} animationConfig={config.slow}/>
              </div>
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
