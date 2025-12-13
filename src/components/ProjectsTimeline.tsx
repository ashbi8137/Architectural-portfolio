"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectsTimeline.module.css";

// Updated Data Structure with Categories
const projects = [
    {
        id: 1,
        category: "Residence",
        client: "Mr. Abdurahiman & Ms. Shareena",
        title: "P A VILLA",
        area: "4000 SQFT",
        location: "Areekode, Malappuram",
        year: "2023",
        description: "A modern villa that balances bold geometry with soft natural textures. The design creates fluid transitions between indoor and outdoor spaces while maintaining a calm, private living environment.",
        // Duplicating images to simulate 4-6 gallery shots as requested
        images: [
            "/Architectural-portfolio/images/pavilla-1.jpg",
            "/Architectural-portfolio/images/pavilla-2.jpg",
            "/Architectural-portfolio/images/pavilla-3.jpg",
            "/Architectural-portfolio/images/pavilla-5.jpg", // Swapped
            "/Architectural-portfolio/images/pavilla-4.jpg", // Swapped
            "/Architectural-portfolio/images/pavilla-6.jpg"
        ]
    },
    // ... (other projects kept same, mapped below)
    {
        id: 2,
        category: "Residence",
        client: "Mr. Subin & Dr. Jahana",
        title: "The Green Core House",
        area: "3200 SQFT",
        location: "Mukkam, Kozhikode",
        year: "2023",
        description: "A sanctuary designed around a central green core, allowing nature to permeate every living space. The architecture fosters a constant dialogue between the interior comfort and the serenity of the outdoors.",
        images: [
            "/Architectural-portfolio/images/subin-night-v2.jpg",
            "/Architectural-portfolio/images/subin-day-final.jpg",
            "/Architectural-portfolio/images/subin-living.jpg",
            "/Architectural-portfolio/images/subin-day-final.jpg", // Mock 4
            "/Architectural-portfolio/images/subin-night-v2.jpg" // Mock 5
        ]
    },
    {
        id: 3,
        category: "Interior", // Changed to Interior based on previous tags
        client: "Mr. Shinu & Ms. Juliya",
        title: "Industrial Loft Restoration",
        area: "2800 SQFT",
        location: "Calicut",
        year: "2023",
        description: "A transformative restoration that repurposes industrial heritage into a contemporary dwelling. Raw textures interact with refined detailing to create a space that honors its past while embracing modern living.",
        images: [
            "/Architectural-portfolio/images/shinu-night.jpg",
            "/Architectural-portfolio/images/shinu-facade.jpg",
            "/Architectural-portfolio/images/shinu-patio.jpg",
            "/Architectural-portfolio/images/shinu-facade.jpg" // Mock 4
        ]
    }
];

const categories = ["Residence", "Commercial", "Institute", "Hospitality", "Interior"];

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter projects based on selection
    const filteredProjects = projects.filter(p => p.category === selectedCategory);

    return (
        <section className={styles.section} id="projects">
            <AnimatePresence mode="wait">
                {!selectedCategory ? (
                    /* VIEW 1: CATEGORY INDEX */
                    <motion.div
                        key="categories"
                        className={styles.categoryContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                    // ...
                    >
                        <ul className={styles.categoryList}>
                            {categories.map((cat, i) => (
                                <motion.li
                                    key={cat}
                                    className={styles.categoryItem}
                                    onClick={() => setSelectedCategory(cat)}
                                    // ...
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                >
                                    {cat}
                                    <span className={styles.categorySup}>
                                        {projects.filter(p => p.category === cat).length > 0 ?
                                            `(${projects.filter(p => p.category === cat).length})` : ''}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ) : (
                    /* VIEW 2: GALLERY EXPANSION */
                    <motion.div
                        key="gallery"
                        className={styles.gallerySection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className={styles.galleryHeader}>
                            <div className={styles.backButton} onClick={() => setSelectedCategory(null)}>
                                ← Back to Index
                            </div>
                            <div className={styles.activeCategoryTitle}>{selectedCategory}</div>
                        </div>

                        {/* Projects List */}
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div key={project.id} className={styles.projectWrapper}>
                                    <div className={styles.projectHeader}>
                                        <div>
                                            <h3 className={styles.projectName}>{project.title}</h3>
                                            <div className={styles.metaGrid}>
                                                <div className={styles.metaItem}>
                                                    <span className={styles.metaLabel}>Client</span>
                                                    <span className={styles.metaValue}>{project.client}</span>
                                                </div>
                                                <div className={styles.metaItem}>
                                                    <span className={styles.metaLabel}>Area</span>
                                                    <span className={styles.metaValue}>{project.area}</span>
                                                </div>
                                                <div className={styles.metaItem}>
                                                    <span className={styles.metaLabel}>Location</span>
                                                    <span className={styles.metaValue}>{project.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.projectDescription}>{project.description}</p>
                                    </div>

                                    {/* Masonry Grid */}
                                    <div className={styles.imageGrid}>
                                        {project.images.map((img, idx) => (
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
                                                    alt={`${project.title} view ${idx + 1}`}
                                                    fill
                                                    className={styles.image}
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    quality={90}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ textAlign: 'center', marginTop: '10rem', opacity: 0.5 }}>
                                <p>Coming Soon</p>
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
                            onClick={(e) => e.stopPropagation()} // Allow clicking image without closing? No, user wants close on click usually.
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
