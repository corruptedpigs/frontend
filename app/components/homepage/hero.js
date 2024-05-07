// import InstituitionsRollbar from './institutions_rollbar';
"use client";

import { motion } from 'framer-motion';
import Image, { getImageProps } from 'next/image';
import Navbar from "./navbar"
import React, { useState } from 'react';



function getBackgroundImage(sectionName, imageData) {
  if (sectionName in imageData) {
    return `url('${imageData[sectionName]}')`;  // Format background image URL
  } else {
    throw new Error(`Background image not found for section: ${sectionName}`);
  }
}

const Hero = () => {
  const imageData = {
    hero: '/background.jpeg',
    footer: '/background-2.jpeg',
  };

  // const {
  //   props: { srcSet },
  // } = getImageProps({ alt: '', width: 900, height: 683, src: '/background.jpeg' })
  const heroBackgroundImage = getBackgroundImage('hero', imageData);
  const hero2BackgroundImage = getBackgroundImage('footer', imageData);

  return (
    <>
      <section id="hero1" style={{ backgroundImage: heroBackgroundImage, backgroundSize: "cover" }}>
        <Navbar />

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content grid grid-cols-1 text-neutral-content container mx-auto py-20">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-5 text-5xl font-bold">Hero Label 1</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-warning uppercase">Launch App</button>
            </div>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }} // One full rotation
              duration={2} // Adjust duration (in seconds)
              ease="easeInOut" // Adjust easing function
              style={{ display: 'flex', /* additional styles */ }}
            >
              {/* Your image elements here */}
              <img src="/carta1.png" alt="Image description" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="hero2" style={{ backgroundImage: hero2BackgroundImage, backgroundSize: "cover" }} className='hero'>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content grid grid-cols-1 container py-20">
          <div className="flex justify-between flex-row-reverse">
            <div className='text-neutral-content mx-10'>
              <h1 className="mb-5 text-5xl font-bold">Hero Label 2</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="mockup-browser border bg-slate-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://corruptedpigs.com</div>
              </div>
              <div className="flex justify-center px-4 py-6 bg-slate-800">
                <Image src="/game-demo.jpeg" height={566} width={900}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
