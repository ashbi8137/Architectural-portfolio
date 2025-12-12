"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Materiality.module.css";

const materials = [
    { name: "Concrete", image: "/Architectural-portfolio/images/texture-concrete.png" },
    { name: "Wood Slats", image: "/Architectural-portfolio/images/texture-wood.png" },
    { name: "Natural Stone", image: "/Architectural-portfolio/images/texture-stone.png" },
    { name: "Metal Mesh", image: "/Architectural-portfolio/images/texture-metal.png" },
    { name: "Light", image: "/Architectural-portfolio/images/texture-light.png" },
];

export default function Materiality() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjusted to not scroll too far or too little depending on content width
    const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);

    return (
        <section ref={targetRef} className={styles.section}>
            <div className={styles.stickyWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Materiality in Focus</h2>
                    <p className={styles.subtext}>Honest textures defining space</p>
                </div>

                <div className={styles.phrases}>
                    <motion.div style={{ opacity: opacity1 }} className={styles.phrase}>Light on stone</motion.div>
                    <motion.div style={{ opacity: opacity2 }} className={styles.phrase}>Shadows on concrete</motion.div>
                    <motion.div style={{ opacity: opacity3 }} className={styles.phrase}>Warmth in wood</motion.div>
                </div>

                <motion.div style={{ x }} className={styles.cardList}>
                    {materials.map((mat, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={mat.image} alt={mat.name} fill className={styles.image} />
                            </div>
                            <div className={styles.label}>{mat.name}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
