"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const heroImages = [
  "/images/courtyard-night.jpg",
  "/images/courtyard-day-detail.jpg",
  "/images/hero.png"
];

// Animation Variants for Staggered Reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const textRevealVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } // Standard easeInOut cubic-bezier
  }
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Image Slider with Slow Zoom */}
      <div className={styles.imageLayer}>
        {heroImages.map((src, index) => (
          <motion.div
            key={index}
            className={styles.absoluteFull}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Slow, luxurious crossfade
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={src}
              alt="Architecture"
              fill
              className={styles.image}
              priority={index === 0}
              quality={100}
            />
            <div className={styles.overlay} />
          </motion.div>
        ))}
      </div>

      {/* Content Layer with Masked Staggered Text */}
      <div className={styles.content}>
        {/* Logo in top-left corner */}


        <motion.div
          className={styles.textContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand Name - Restored */}
          <div className={styles.maskContainer}>
            <motion.h1 variants={textRevealVariants} className={styles.brandName}>
              SHAMIL PUTHUSSERI
            </motion.h1>
          </div>

          <div className={styles.maskContainer}>
            <motion.h2 variants={textRevealVariants} className={styles.subBrand}>
              ARCHITECTS
            </motion.h2>
          </div>

          <motion.div
            variants={textRevealVariants}
            className={styles.separatorContainer}
          >
            <div className={styles.separator} />
          </motion.div>

          <div className={styles.maskContainer}>
            <motion.p variants={textRevealVariants} className={styles.tagline}>
              Timeless. Contextual. Sustainable.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Minimalist Tech Elements */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className={styles.scrollLine}>
          <motion.div
            className={styles.scrollProgress}
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
