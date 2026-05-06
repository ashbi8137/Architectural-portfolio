"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from "./ProjectDetail.module.css";
import { Project } from "@/data/projects";
import RelatedProjects from "@/components/RelatedProjects";

export default function ProjectDetailClient({ 
    activeProject, 
    decodedCategory 
}: { 
    activeProject: Project, 
    decodedCategory: string 
}) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Force scroll to top when project changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProject.id]);

    const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 600 : 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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

                <div className={styles.projectImageSection}>
                    {/* Hero Media */}
                    {activeProject.images.length > 0 && (
                        <motion.div 
                            className={styles.heroImageWrapper}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            onClick={() => setSelectedImage(activeProject.images[0])}
                        >
                            {isVideo(activeProject.images[0]) ? (
                                <video 
                                    src={activeProject.images[0]}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.image}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            ) : (
                                <Image
                                    src={activeProject.images[0]}
                                    alt={activeProject.title}
                                    fill
                                    className={styles.image}
                                    sizes="100vw"
                                    priority
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            )}
                        </motion.div>
                    )}

                    {/* Thumbnail Slider */}
                    {activeProject.images.length > 1 && (
                        <div className={styles.thumbnailSliderContainer}>
                            {activeProject.images.length > 4 && (
                                <button className={styles.sliderArrow} onClick={() => scroll('left')}>‹</button>
                            )}
                            
                            <div className={styles.thumbnailScroll} ref={scrollRef}>
                                {activeProject.images.slice(1).map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.thumbnailItem}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        {isVideo(img) ? (
                                            <video 
                                                src={img}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className={styles.image}
                                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                            />
                                        ) : (
                                            <Image
                                                src={img}
                                                alt={`${activeProject.title} view ${idx + 2}`}
                                                fill
                                                className={styles.image}
                                                sizes="300px"
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {activeProject.images.length > 4 && (
                                <button className={styles.sliderArrow} onClick={() => scroll('right')}>›</button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <RelatedProjects 
                currentProjectId={activeProject.id} 
                category={activeProject.category} 
            />

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
                            {isVideo(selectedImage) ? (
                                <video 
                                    src={selectedImage}
                                    controls
                                    autoPlay
                                    muted
                                    className={styles.lightboxImage}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            ) : (
                                <Image
                                    src={selectedImage}
                                    alt="Fullscreen"
                                    fill
                                    className={styles.lightboxImage}
                                    quality={100}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            )}
                            
                            {/* WATERMARK */}
                            <div className={styles.watermark}>
                                <Image 
                                    src="/images/logo_final.png" 
                                    alt="Watermark" 
                                    width={130} 
                                    height={40} 
                                    className={styles.watermarkImage}
                                />
                            </div>

                            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✕</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

