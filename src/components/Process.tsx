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
        <section className={styles.section} id="process">
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>The Journey</h2>
            </div>

            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.stepWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                    >
                        <div className={styles.stepContent}>
                            <span className={styles.number}>{step.id}</span>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
