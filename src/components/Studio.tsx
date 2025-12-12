"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Studio.module.css";

const team = [
    { name: "John Doe", role: "Senior Arch.", image: "/images/placeholder.svg" },
    { name: "Jane Smith", role: "Interior Lead", image: "/images/placeholder.svg" },
    { name: "Alex Ray", role: "Visualizer", image: "/images/placeholder.svg" },
];

export default function Studio() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/ceo-new.jpg"
                            alt="Ar Shamil P A"
                            fill
                            className={styles.ceoImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                <motion.div
                    className={styles.contentColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>The Visionary</span>
                    <h2 className={styles.heading}>Ar Shamil P A</h2>
                    <div className={styles.separator}></div>
                    <p className={styles.visionText}>
                        "Architecture is a dialogue between human aspiration and the natural world. In every line we draw, we seek to capture the silence of the mountains and the clarity of light."
                    </p>
                    <div className={styles.role}>Principal Architect & CEO</div>
                </motion.div>
            </div>
        </section>
    );
}
