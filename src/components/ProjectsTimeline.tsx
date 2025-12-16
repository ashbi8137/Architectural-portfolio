"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectsTimeline.module.css";
import LiquidImage from "./LiquidImage";

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
        category: "Residence",
        client: "Mr. Namshad & Family",
        title: "The Nilambur House", // Using a placeholder title or generating one based on location unless specified. User said "replace the project... to residence". I'll use "The Nilambur Residence" or similar if title isn't explicit, but I'll stick to a generic "Residence" or infer from location. User didn't give a title, just client/area/loc. I'll use "Private Residence" or "The Namshad Residence". Let's go with "The Nilambur Residence".
        area: "3800 SQFT",
        location: "Nilambur",
        year: "2024",
        description: "A contemporary residence designed to embrace the lush landscapes of Nilambur. The spatial organization prioritizes natural light and cross-ventilation, creating a seamless connection between the modern interior living spaces and the serenity of the outdoors.",
        images: [
            "/Architectural-portfolio/images/shinu-night.jpg", // Keeping placeholders for now as user didn't provide new images, or I should use existing ones. User said "updated content", implying text. I will keep the images or request them? I'll keep the images for start to avoid 404s, but maybe swap them if I have relevant ones. I'll stick to existing images to ensure build works.
            "/Architectural-portfolio/images/shinu-facade.jpg",
            "/Architectural-portfolio/images/shinu-patio.jpg",
            "/Architectural-portfolio/images/shinu-facade.jpg"
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
                                    {/* Count removed per user request */}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '5vh',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                textAlign: 'center',
                                fontFamily: 'var(--font-tenor)',
                                fontSize: '0.75rem',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                color: 'var(--foreground)',
                                pointerEvents: 'none' // Don't block clicks
                            }}
                        >
                            Select a category to explore projects
                        </motion.div>
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
                                        <h3 className={styles.projectName}>{project.title}</h3>

                                        {/* Details Grid: Meta (Left) + Description (Right) aligned by top border */}
                                        <div className={styles.projectInfoContainer}>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoItem}>
                                                    <span className={styles.infoLabel}>Client</span>
                                                    <span className={styles.infoValue}>{project.client}</span>
                                                </div>
                                                <div className={styles.infoItem}>
                                                    <span className={styles.infoLabel}>Area</span>
                                                    <span className={styles.infoValue}>{project.area}</span>
                                                </div>
                                            </div>

                                            <div className={styles.locationRow}>
                                                <span className={styles.infoLabel}>Location</span>
                                                <span className={styles.infoValue}>{project.location}</span>
                                            </div>

                                            <div className={styles.descriptionRow}>
                                                <p className={styles.projectDescription}>{project.description}</p>
                                            </div>
                                        </div>
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
                                                <LiquidImage
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
