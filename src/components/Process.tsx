"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
    {
        id: "01",
        title: "The Vision",
        desc: "It starts with silence. We listen to the land, the light, and your untold stories. A blueprint is not just lines; it is a promise of how life will unfold."
    },
    {
        id: "02",
        title: "The Blueprint",
        desc: "Translating dreams into geometry. Every angle is calculated to capture the sun, every volume designed to hold a memory. We sketch the soul of the structure."
    },
    {
        id: "03",
        title: "The Craft",
        desc: "Materials speak. We choose stone that ages, wood that warms, and concrete that grounds. It is a tactile conversation between human hands and raw elements."
    },
    {
        id: "04",
        title: "The Reality",
        desc: "The final breath. The scaffolding falls, and the space stands alone, ready to receive you. It is no longer a project; it is a place of being."
    },
];

export default function Process() {
    return (
        <section className={styles.section}>
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>The Journey</h2>
            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.guideLine}></div>

                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`${styles.stepWrapper} ${isEven ? styles.left : styles.right}`}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-15%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className={styles.stepContent}>
                                <span className={styles.number}>{step.id}</span>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.desc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}
