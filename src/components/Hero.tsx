"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import MaskedText from "./MaskedText";

const heroImages = [
  "/Architectural-portfolio/images/shinu-night.jpg",
  "/Architectural-portfolio/images/subin-night-v2.jpg",
  "/Architectural-portfolio/images/abdurahiman-exterior-v2.jpg"
];

// Animation Variants for Staggered Reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const textRevealVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" }
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
    <section className={styles.hero} id="hero">
      {/* Background Image Slider with Slow Zoom */}
      <div className={styles.imageLayer}>
        {heroImages.map((src, index) => (
          <motion.div
            key={index}
            className={styles.absoluteFull}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.05
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
              sizes="100vw"
            />
            <div className={styles.overlay} />
          </motion.div>
        ))}
      </div>



      {/* Content Layer with Masked Staggered Text */}
      <div className={styles.content}>

        <div className={styles.textContent}>
          {/* Brand Name */}
          <h1 className={styles.brandName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MaskedText delay={0.2} className={styles.brandName}>SHAMIL PUTHUSSERI</MaskedText>
            <MaskedText delay={0.4} className={styles.subBrand}>ARCHITECTS</MaskedText>
          </h1>

          <div className={styles.separatorContainer}>
            <motion.div
              className={styles.separator}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            />
          </div>

          <MaskedText delay={0.8} className={styles.tagline}>
            Timeless. Contextual. Sustainable.
          </MaskedText>
        </div>
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
