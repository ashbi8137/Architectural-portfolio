"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";

const heroImages = [
  "/images/hero-1-new.jpg",
  "/images/subin-night-v2.jpg",
  "/images/abdurahiman-exterior-v2.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className={styles.hero} id="hero">
      {/* Sliding Peek Carousel */}
      <div className={styles.sliderContainer}>
        <motion.div 
            className={styles.sliderTrack}
            initial={false}
            animate={{ x: `calc(-${currentIndex} * var(--slide-stride))` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {heroImages.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={src}
                alt={`Architecture view ${index + 1}`}
                fill
                className={styles.image}
                priority={index === 0}
                quality={100}
                sizes="100vw"
              />
              <div className={styles.overlay} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Manual Navigation Arrows */}
      <button onClick={prevImage} className={`${styles.navArrow} ${styles.prevArrow}`} aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
      </button>
      <button onClick={nextImage} className={`${styles.navArrow} ${styles.nextArrow}`} aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
      </button>
    </section>
  );
}
