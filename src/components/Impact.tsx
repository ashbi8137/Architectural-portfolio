"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Impact.module.css";

const testimonials = [
    {
        quote: "Shamil Puthusseri Architects realized a home we didn't know we needed. It captures light in a way that changes how we live.",
        author: "Sarah Jenkins",
        role: "Cliff House"
    },
    {
        quote: "A masterclass in restraint and beauty. The studio transformed our vision into a timeless reality.",
        author: "David Chen",
        role: "Urban Loft"
    },
    {
        quote: "Architecture that breathes. They understood the site better than we did ourselves.",
        author: "Elena Rodriguez",
        role: "Cultural Center"
    },
];

export default function Impact() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Client Perspectives
                </motion.h2>

                <div className={styles.slider}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className={styles.slide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className={styles.quote}>"{testimonials[index].quote}"</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>{testimonials[index].author}</span>
                                <span className={styles.separator}>—</span>
                                <span className={styles.role}>{testimonials[index].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.controls}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
