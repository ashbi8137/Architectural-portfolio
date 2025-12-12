"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className={styles.manifestoSection}>
            <div className={styles.gridBackground}></div> {/* Architectural Grid */}

            <div className={styles.contentContainer}>
                {/* The "Blueprint" floating card layout */}

                {/* VINTAGE PORTRAIT CARD */}
                <motion.div
                    className={styles.imageCardWrapper}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
                >
                    <div className={styles.imageFrame}>
                        {/* Decorative Outer Border */}
                        <div className={styles.goldOutlineFrame}></div>

                        {/* Main Image */}
                        <Image
                            src="/images/ceo-new.jpg"
                            alt="Ar Shamil P A"
                            fill
                            className={styles.ceoImage}
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>
                </motion.div>

                <div className={styles.textComposition}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.hugeTitle}>The Vision</h2>
                    </motion.div>

                    <div className={styles.proseWrapper}>
                        <p className={styles.prose}>
                            "Architecture is <span className={styles.highlight}>silence</span> made visible.
                            It is a conversation between the land and the light."
                        </p>
                        <p className={styles.proseSmall}>
                            We do not just build spaces. We carefully craft experiences that pause time and elevate the human spirit.
                        </p>
                    </div>

                    <div className={styles.signatureBlock}>
                        <div className={styles.signature}>Ar. Shamil Puthusseri</div>
                        <div className={styles.microTagline}>Principal Architect</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
