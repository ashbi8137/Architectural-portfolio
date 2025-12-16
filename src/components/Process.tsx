"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Process.module.css";
import Image from "next/image";

const steps = [
    {
        id: "01",
        title: "The Vision",
        desc: "It starts with silence. We listen to the land and your untold stories.",
        image: "/Architectural-portfolio/images/shinu-patio.jpg",
    },
    {
        id: "02",
        title: "The Blueprint",
        desc: "Translating dreams into geometry. Every angle calculated for light.",
        image: "/Architectural-portfolio/images/subin-living.jpg",
    },
    {
        id: "03",
        title: "The Craft",
        desc: "Materials speak. Stone that ages, wood that warms, concrete that grounds.",
        image: "/Architectural-portfolio/images/abdurahiman-exterior-v2.jpg",
    },
    {
        id: "04",
        title: "The Reality",
        desc: "The scaffolding falls. It is no longer a project; it is a place of being.",
        image: "/Architectural-portfolio/images/shinu-night.jpg",
    }
];

export default function Process() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section} id="process">
            <div className={styles.container}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        role="button"
                        aria-expanded={activeIndex === index}
                        className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}
                        onHoverStart={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)} // For mobile tap
                        animate={{
                            flex: activeIndex === index ? 3 : 1,
                            opacity: activeIndex === index ? 1 : 0.6
                        }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    >
                        <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className={styles.image}
                            priority
                        />
                        <div className={styles.overlay} />

                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.number}>{step.id}</span>
                                <motion.h3
                                    className={styles.title}
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0.7,
                                        y: activeIndex === index ? 0 : 0
                                    }}
                                >
                                    {step.title}
                                </motion.h3>
                            </div>

                            <motion.p
                                className={styles.desc}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    height: activeIndex === index ? "auto" : 0,
                                    marginTop: activeIndex === index ? "1rem" : 0
                                }}
                            >
                                {step.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
