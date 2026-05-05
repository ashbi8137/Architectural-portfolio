"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsTimeline.module.css";
import { projects, categoriesData } from "@/data/projects";

export default function ProjectsGallery() {
    return (
        <section className={styles.section} id="projects">
            <AnimatePresence mode="wait">
                <motion.div
                    key="categories"
                    className={styles.categoryContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                >
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                    <div className={styles.categoryGrid}>
                        {categoriesData.map((cat, i) => (
                            <Link href={`/projects/${cat.name.toLowerCase()}`} key={cat.name} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className={styles.categoryCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className={styles.categoryBgImage}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                    <div className={styles.categoryOverlay} />
                                    <span className={styles.categoryCardTitle}>{cat.name}</span>
                                    <span className={styles.categoryArrow}>→</span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
