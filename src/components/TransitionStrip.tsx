"use client";

import styles from "./TransitionStrip.module.css";

const phrases = [
    "Contextual Design", "Sustainable Living", "Material Honesty",
    "Light & Shadow", "Spatial Narrative", "Timeless Architecture",
    "Contextual Design", "Sustainable Living", "Material Honesty",
    "Light & Shadow", "Spatial Narrative", "Timeless Architecture"
];

export default function TransitionStrip() {
    return (
        <div className={styles.strip}>
            <div className={styles.track}>
                {phrases.map((phrase, i) => (
                    <div key={i} className={styles.item}>
                        <span>{phrase}</span>
                        <span className={styles.separator}></span>
                    </div>
                ))}
            </div>
        </div>
    );
}
