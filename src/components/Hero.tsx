"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const heroImages = [
  { src: "/images/hero-1-new.jpg", title: "RESIDENCE AT AREEKODE" },
  { src: "/images/subin-night-v2.jpg", title: "RESIDENCE AT NILAMBUR" },
  { src: "/images/abdurahiman-exterior-v2.jpg", title: "RESIDENCE AT FAROOK" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds interval

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
