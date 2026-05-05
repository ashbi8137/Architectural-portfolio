"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const heroImages = [
  { src: "/images/hero-3.png", title: "Design" },
  { src: "/images/hero-2.png", title: "Minimalism" },
  { src: "/images/hero-4.png", title: "Interior" },
  { src: "/images/hero-5.png", title: "Space" },
  { src: "/images/hero-1.png", title: "Architecture" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500); // 4 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.sliderContainer}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].title}
              fill
              className={styles.image}
              priority
              quality={100}
              sizes="100vw"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className={styles.overlay} />

            {/* IMAGE CAPTION */}
            <div className={styles.caption}>
              <span className={styles.counter}>{currentIndex + 1} / {heroImages.length}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
