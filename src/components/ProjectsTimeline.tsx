"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ProjectsTimeline.module.css";

const projects = [
    {
        id: 1,
        title: "Mr. Abdurahiman & Ms. Shareena",
        description: "A monolithic concrete structure perched on the edge of the coastline, framing panoramic ocean views while maintaining privacy.",
        tags: "Areekode, Malappuram · 2023",
        images: ["/images/courtyard-night.jpg", "/images/courtyard-night.jpg", "/images/courtyard-night.jpg"]
    },
    {
        id: 2,
        title: "Mr. Subin & Dr. Jahana",
        description: "Centering life around a lush internal garden, this villa explores the boundaries between indoor and outdoor living.",
        tags: "Mukkam, Kozhikode · 2023",
        images: ["/images/courtyard-villa.png", "/images/courtyard-villa.png", "/images/courtyard-villa.png"]
    },
    {
        id: 3,
        title: "Mr. Shinu & Ms. Juliya",
        description: "Reimagining an industrial warehouse into a warm, gallery-like living space using honest textures and adaptive reuse.",
        tags: "Interior · 2023 · Industrial",
        images: ["/images/urban-loft.png", "/images/urban-loft.png", "/images/urban-loft.png"]
    }
];

function ProjectCard({ project, index, onImageClick }: { project: any, index: number, onImageClick: (src: string) => void }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <motion.div
            ref={ref}
            className={styles.projectRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.imageCluster}>
                {/* Main Hero Image */}
                <div className={styles.mainImageWrapper} onClick={() => onImageClick(project.images[0])}>
                    <motion.div layoutId={`img-${project.id}-0`} className={styles.imageWrapperInner}>
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 600px"
                        />
                    </motion.div>
                </div>

                {/* Floating Detail 1 */}
                <motion.div style={{ y: y2 }} className={styles.detailImage1} onClick={() => onImageClick(project.images[1])}>
                    <motion.div layoutId={`img-${project.id}-1`} className={styles.imageWrapperInner}>
                        <Image
                            src={project.images[1]}
                            alt="Detail View 1"
                            fill
                            className={styles.image}
                            sizes="200px"
                        />
                    </motion.div>
                </motion.div>

                {/* Floating Detail 2 */}
                <motion.div style={{ y }} className={styles.detailImage2} onClick={() => onImageClick(project.images[2])}>
                    <motion.div layoutId={`img-${project.id}-2`} className={styles.imageWrapperInner}>
                        <Image
                            src={project.images[2]}
                            alt="Detail View 2"
                            fill
                            className={styles.image}
                            sizes="250px"
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectMeta}>{project.tags}</div>
                <p className={styles.description}>{project.description}</p>
            </div>
        </motion.div>
    );
}

export default function ProjectsTimeline() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Selected Works</h2>
            <div className={styles.timeline}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onImageClick={setSelectedImage}
                    />
                ))}
            </div>

            {/* Lightbox Overlay */}
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
                            // layoutId would be ideal but complex with dynamic IDs from children, fading is safer for general use
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged View"
                                fill
                                className={styles.lightboxImage}
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
