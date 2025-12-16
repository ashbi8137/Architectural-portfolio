"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Process.module.css";
import Image from "next/image";

const steps = [
    {
        id: "01",
        title: "The Vision",
        desc: "It starts with silence. We listen to the land, the light, and your untold stories. A blueprint is not just lines; it is a promise of how life will unfold.",
        image: "/images/shinu-patio.jpg"
    },
    {
        id: "02",
        title: "The Blueprint",
        desc: "Translating dreams into geometry. Every angle is calculated to capture the sun, every volume designed to hold a memory. We sketch the soul of the structure.",
        image: "/images/subin-living.jpg"
    },
    {
        id: "03",
        title: "The Craft",
        desc: "Materials speak. We choose stone that ages, wood that warms, and concrete that grounds. It is a tactile conversation between human hands and raw elements.",
        image: "/images/abdurahiman-exterior-v2.jpg"
    },
    {
        id: "04",
        title: "The Reality",
        desc: "The final breath. The scaffolding falls, and the space stands alone, ready to receive you. It is no longer a project; it is a place of being.",
        image: "/images/shinu-night.jpg"
    }
];

export default function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress to x translation
    // 4 items = move to -300% or slightly less to keep last one visible
    // moving from 0% to -75% (showing 4 items, 100% width each)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className={styles.section} id="process">
            <div className={styles.stickyContainer}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>The Journey</h2>
                </div>

                <motion.div style={{ x }} className={styles.horizontalWrapper}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            {/* Background Image for Card */}
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.overlay} />
                            </div>

                            <div className={styles.content}>
                                <span className={styles.number}>{step.id}</span>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.desc}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Horizontal Progress bar specific to this section */}
                <div className={styles.progressBarContainer}>
                    <motion.div
                        className={styles.progressBar}
                        style={{ scaleX: scrollYProgress }}
                    />
                </div>
            </div>
        </section>
    );
}
