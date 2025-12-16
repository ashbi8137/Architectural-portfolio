"use client";

import { motion } from "framer-motion";

interface MaskedTextProps {
    children: string; // Keep simple: strings only for word splitting
    className?: string;
    delay?: number;
}

export default function MaskedText({ children, className, delay = 0 }: MaskedTextProps) {
    // Split text into words
    const words = children.split(" ");

    return (
        <span
            className={className}
            style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '0.25em',
                lineHeight: 1.1, // Tight line height usually looks better for this
                overflow: 'hidden'
            }}
        >
            {words.map((word, i) => (
                <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                            delay: delay + (i * 0.03) // Stagger per word
                        }}
                        style={{ display: 'inline-block' }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
