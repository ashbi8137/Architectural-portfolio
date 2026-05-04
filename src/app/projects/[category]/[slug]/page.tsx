"use client";

import { projects } from "@/data/projects";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectDetail.module.css";

export default function ProjectPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = use(params);
    const decodedCategory = decodeURIComponent(category);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    const activeProject = projects.find(
        (p) => p.slug === slug && p.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    if (!activeProject) {
        return (
            <main className={styles.main}>
                <div className={styles.galleryHeader}>
                    <Link href={`/projects/${decodedCategory.toLowerCase()}`} className={styles.backButton}>
                        ← Back to {decodedCategory}
                    </Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h1>Project Not Found</h1>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.galleryHeader}>
                <Link href={`/projects/${decodedCategory.toLowerCase()}`} className={styles.backButton}>
                    ← Back to {decodedCategory} Projects
                </Link>
            </div>

            <div className={styles.projectWrapper}>
                <div className={styles.projectHeader}>
                    <h3 className={styles.projectName}>{activeProject.title}</h3>

                    <div className={styles.projectInfoContainer}>
                        <div className={styles.projectMetaColumn}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Client</span>
                                <span className={styles.infoValue}>{activeProject.client}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Area</span>
                                <span className={styles.infoValue}>{activeProject.area}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Location</span>
                                <span className={styles.infoValue}>{activeProject.location}</span>
                            </div>
                        </div>

                        <div className={styles.projectDescriptionColumn}>
                            <p className={styles.projectDescription}>{activeProject.description}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageGrid}>
                    {activeProject.images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.gridItem}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`${activeProject.title} view ${idx + 1}`}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={90}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Fullscreen"
                                fill
                                className={styles.lightboxImage}
                                quality={100}
                            />
                            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✕</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
