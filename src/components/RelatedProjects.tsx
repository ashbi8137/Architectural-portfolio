"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./RelatedProjects.module.css";

export default function RelatedProjects({ 
    currentProjectId, 
    category 
}: { 
    currentProjectId: number, 
    category: string 
}) {
    // Find projects in the same category, excluding the current one
    let related = projects.filter(
        p => p.category.toLowerCase() === category.toLowerCase() && p.id !== currentProjectId
    );

    // If no related projects in the same category, show any other projects
    if (related.length === 0) {
        related = projects.filter(p => p.id !== currentProjectId);
    }

    // Take the next 2 projects
    const displayProjects = related.slice(0, 2);

    if (displayProjects.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Next Projects</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.grid}>
                    {displayProjects.map((project, idx) => (
                        <Link 
                            href={`/projects/${project.category.toLowerCase()}/${project.slug}`} 
                            key={project.id}
                            className={styles.card}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewLabel}>View Project</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
