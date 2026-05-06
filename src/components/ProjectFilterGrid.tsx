"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectFilterGrid.module.css";
import { projects } from "@/data/projects";

function FilterGridContent() {
    const searchParams = useSearchParams();
    const initialCat = searchParams.get("category")?.toUpperCase() || "ALL";
    
    const [activeCategory, setActiveCategory] = useState(initialCat);

    // Specific order: Residence, Interior, others, Masterplan last
    const categories = useMemo(() => {
        const allCats = Array.from(new Set(projects.map(p => p.category.toUpperCase())));
        const order = ["RESIDENCE", "INTERIOR", "HOSPITALITY", "HEALTHCARE", "INSTITUTE", "MASTERPLAN"];
        
        const sortedCats = order.filter(cat => allCats.includes(cat));
        const remainingCats = allCats.filter(cat => !order.includes(cat));
        
        return ["ALL", ...sortedCats, ...remainingCats];
    }, []);

    // Sync state with URL params if they change
    useEffect(() => {
        if (initialCat) {
            setActiveCategory(initialCat);
        }
    }, [initialCat]);

    const filteredProjects = useMemo(() => {
        let baseProjects = activeCategory === "ALL" ? projects : projects.filter(p => p.category.toUpperCase() === activeCategory);
        
        const orderMap: Record<string, number> = {
            "RESIDENCE": 1,
            "INTERIOR": 2,
            "HOSPITALITY": 3,
            "HEALTHCARE": 4,
            "INSTITUTE": 5,
            "MASTERPLAN": 6
        };


        return [...baseProjects].sort((a, b) => {
            const orderA = orderMap[a.category.toUpperCase()] || 99;
            const orderB = orderMap[b.category.toUpperCase()] || 99;
            return orderA - orderB;
        });
    }, [activeCategory]);

    const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');

    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                {/* Filter Bar */}
                <div className={styles.filterBar}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterButton} ${activeCategory === cat ? styles.activeFilter : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat === "ALL" ? "SELECTED PROJECTS" : cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className={styles.projectsGrid}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link 
                                    href={`/projects/${project.category.toLowerCase()}/${project.slug}`}
                                    className={styles.projectCard}
                                >
                                    <div className={styles.projectImageWrapper}>
                                        {isVideo(project.images[0]) ? (
                                            <video 
                                                src={project.images[0]}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className={styles.projectImage}
                                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                            />
                                        ) : (
                                            <Image
                                                src={project.images[0]}
                                                alt={project.title}
                                                fill
                                                className={styles.projectImage}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        )}
                                    </div>
                                    <div className={styles.projectOverlay}>
                                        <div className={styles.projectInfo}>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectLocation}>{project.location}</p>
                                        </div>
                                        <div className={styles.projectArrow}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}


export default function ProjectFilterGrid() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FilterGridContent />
        </Suspense>
    );
}
