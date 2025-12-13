"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Philosophy.module.css";

const phrases = ["Context first", "Light as material", "Honest textures"];

export default function Philosophy() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-20%" });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className={styles.heading}
                    >
                        Design Philosophy
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className={styles.description}
                    >
                        Shamil Puthusseri Architects believes in creating spaces that resonate with their environment.
                        Our approach is rooted in a deep understanding of context, materiality, and the human experience.
                        We strip away the unnecessary to reveal the essence of habitation.
                    </motion.p>

                    <div className={styles.phrases}>
                        {phrases.map((phrase, index) => (
                            <motion.div
                                key={index}
                                className={styles.phrase}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.2), duration: 0.5 }}
                            >
                                <div style={{ width: '20px', height: '1px', background: 'var(--accent)' }}></div>
                                {phrase}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <motion.div
                        className={styles.imageWrapper}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                    >
                        <Image src="/Architectural-portfolio/images/texture-light.png" alt="Light and Shadow" fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                    <motion.div
                        className={styles.imageWrapper}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                    >
                        <Image src="/Architectural-portfolio/images/texture-concrete.png" alt="Concrete Texture" fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={styles.journeyLine}
                style={{ scaleX: lineScale, transformOrigin: "left" }}
            />
        </section>
    );
}
