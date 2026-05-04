"use client";

import { projects } from "@/data/projects";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProjectList.module.css";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = use(params);
    const decodedCategory = decodeURIComponent(category);
    
    const categoryProjects = projects.filter(
        (p) => p.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    const displayCategory = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

    return (
        <main className={styles.main}>
            <div className={styles.galleryHeader}>
                <Link href="/#projects" className={styles.backButton}>
                    ← Back to Categories
                </Link>
                <div className={styles.activeCategoryTitle}>{displayCategory}</div>
            </div>

            <div className={styles.projectsGrid}>
                {categoryProjects.length > 0 ? (
                    categoryProjects.map((project, idx) => (
                        <Link href={`/projects/${decodedCategory.toLowerCase()}/${project.slug}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                className={styles.projectThumbCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                            >
                                <div className={styles.projectThumbImageWrapper}>
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className={styles.projectThumbImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className={styles.projectThumbInfo}>
                                    <h3 className={styles.projectThumbTitle}>{project.title}</h3>
                                    <p className={styles.projectThumbLocation}>{project.location}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.5, marginTop: '4rem' }}>
                        <p>Coming Soon</p>
                    </div>
                )}
            </div>
        </main>
    );
}
