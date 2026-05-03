"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectsTimeline.module.css";
import { projects, categoriesData } from "@/data/projects";

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter projects based on selection
    const filteredProjects = projects.filter(p => p.category === selectedCategory);
    const activeProject = projects.find(p => p.id === selectedProject);

    return (
        <section className={styles.section} id="projects">
            <AnimatePresence mode="wait">
                {!selectedCategory ? (
                    /* VIEW 1: CATEGORY INDEX (Interactive Grid) */
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
                                <motion.div
                                    key={cat.name}
                                    className={styles.categoryCard}
                                    onClick={() => setSelectedCategory(cat.name)}
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
                                    />
                                    <div className={styles.categoryOverlay} />
                                    <span className={styles.categoryCardTitle}>{cat.name}</span>
                                    <span className={styles.categoryArrow}>→</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : !selectedProject ? (
                    /* VIEW 2: PROJECT LIST (2-Column Grid) */
                    <motion.div
                        key="projectList"
                        className={styles.projectListSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className={styles.galleryHeader}>
                            <div className={styles.backButton} onClick={() => setSelectedCategory(null)}>
                                ← Back to Categories
                            </div>
                            <div className={styles.activeCategoryTitle}>{selectedCategory}</div>
                        </div>

                        {/* Projects Grid */}
                        <div className={styles.projectsGrid}>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, idx) => (
                                    <motion.div
                                        key={project.id}
                                        className={styles.projectThumbCard}
                                        onClick={() => setSelectedProject(project.id)}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
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
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.5, marginTop: '4rem' }}>
                                    <p>Coming Soon</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ) : (
                    /* VIEW 3: PROJECT DETAIL */
                    <motion.div
                        key="projectDetail"
                        className={styles.gallerySection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className={styles.galleryHeader}>
                            <div className={styles.backButton} onClick={() => setSelectedProject(null)}>
                                ← Back to {selectedCategory} Projects
                            </div>
                        </div>

                        {/* Specific Project Details */}
                        {activeProject && (
                            <div className={styles.projectWrapper}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectName}>{activeProject.title}</h3>

                                    <div className={styles.projectInfoContainer}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.infoItem}>
                                                <span className={styles.infoLabel}>Client</span>
                                                <span className={styles.infoValue}>{activeProject.client}</span>
                                            </div>
                                            <div className={styles.infoItem}>
                                                <span className={styles.infoLabel}>Area</span>
                                                <span className={styles.infoValue}>{activeProject.area}</span>
                                            </div>
                                        </div>

                                        <div className={styles.locationRow}>
                                            <span className={styles.infoLabel}>Location</span>
                                            <span className={styles.infoValue}>{activeProject.location}</span>
                                        </div>

                                        <div className={styles.descriptionRow}>
                                            <p className={styles.projectDescription}>{activeProject.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Masonry Grid */}
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
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

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
                            {/* Close Button */}
                            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✕</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
