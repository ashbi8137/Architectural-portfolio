"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
    return (
        <section className={styles.section}>
            {/* Hero Banner - Interior / Studio Image */}
            <div className={styles.heroImageWrapper}>
                <Image
                    src="/images/studio-interior.png"
                    alt="Studio Interior"
                    fill
                    className={styles.heroImage}
                    priority
                    quality={100}
                    sizes="100vw"
                    onContextMenu={(e) => e.preventDefault()}
                />
                <div className={styles.heroOverlay} />
                <motion.div
                    className={styles.heroCaption}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <span className={styles.heroCaptionLabel}>The Studio</span>
                </motion.div>
            </div>

            {/* About Section with Profile */}
            <div className={styles.aboutSection}>
                <motion.div
                    className={styles.aboutGrid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left Column - Profile + Name */}
                    <div className={styles.aboutLeft}>
                        <div className={styles.profileFrame}>
                            <Image
                                src="/images/ceo-new.png"
                                alt="Ar. Shamil Puthusseri"
                                fill
                                className={styles.profileImage}
                                quality={100}
                                priority
                                sizes="400px"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                        <h3 className={styles.profileName}>Ar. Shamil Puthusseri</h3>
                        <span className={styles.profileTitle}>Principal Architect</span>
                    </div>

                    {/* Right Column - Description */}
                    <div className={styles.aboutRight}>
                        <blockquote className={styles.quote}>
                            "Every structure begins as a whisper between land, light, and imagination."
                        </blockquote>
                        <p className={styles.aboutText}>
                            We design spaces that breathe with their surroundings — balancing
                            contemporary aesthetics with timeless sensibility. Every project is
                            a conversation between aspiration and site.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className={styles.statsRow}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>6+</span>
                        <span className={styles.statLabel}>Years</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>Kozhikode</span>
                        <span className={styles.statLabel}>Kerala</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
